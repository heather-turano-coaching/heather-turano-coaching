import { idArg, objectType, stringArg } from "@nexus/schema";

import { DynamicResolverContext } from "../context";

export const mutations = objectType({
  name: "Mutation",
  definition(t) {
    t.crud.createOneUser({ alias: "signupUser" });
    t.crud.updateOneUser();
    t.crud.deleteOnePost();

    /**
     * Gets the user and ensures that the local DB is
     * updated with the values from the Auth0 DB which
     * is the source of truth for our users
     *
     * It gets the userId from the validated token that
     * resides on the resolver context
     * This mutation should be protected with isAuthenticated
     */
    t.field("loadUser", {
      type: "User",
      resolve: async (
        _,
        __,
        { prisma, dataSources, userId }: DynamicResolverContext
      ) => {
        if (!userId) {
          throw new Error(
            "You cannot perform this mutation without a validated session."
          );
        }

        try {
          // get the user from Auth0
          const { email, name } = await dataSources.userInfoApi.getUser(userId);
          // performs an upsert on the existing / non-existing user
          const userFromDb = await prisma.user.upsert({
            where: { id: userId },
            update: { email, name },
            create: { id: userId, email, name },
          });
          return userFromDb;
        } catch (error) {
          throw new Error(`There was an error syncing the user: ${error}`);
        }
      },
    });

    t.field("createDraft", {
      type: "Post",
      args: {
        title: stringArg({ nullable: false }),
        content: stringArg(),
        authorEmail: stringArg(),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.prisma.post.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail },
            },
          },
        });
      },
    });

    t.field("publish", {
      type: "Post",
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.post.update({
          where: { id: Number(id) },
          data: { published: true },
        });
      },
    });
  },
});
