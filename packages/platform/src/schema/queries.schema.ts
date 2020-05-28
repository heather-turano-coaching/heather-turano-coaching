import { objectType, stringArg } from "@nexus/schema";

export const queries = objectType({
  name: "Query",
  definition(t) {
    t.crud.post();
    t.crud.user();

    t.list.field("feed", {
      type: "Post",
      resolve: (_, args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { published: true },
        });
      },
    });

    // Remove this eventually
    t.list.field("feedSecured", {
      type: "Post",
      resolve: (_, args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { published: true },
        });
      },
    });

    t.list.field("filterPosts", {
      type: "Post",
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        });
      },
    });
  },
});
