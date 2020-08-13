import { schema } from "nexus";

import { formatError } from "../app.util";

schema.objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.body();
    t.model.published();
  }
});

schema.extendType({
  type: "Query",
  definition(t) {
    t.list.field("drafts", {
      /**
       * Get all of the posts in draft status
       */
      type: "Post",
      nullable: false,
      async resolve(_root, _args, context) {
        try {
          const posts = await context.db.post.findMany({
            where: {
              published: false
            }
          });
          return posts;
        } catch (error) {
          throw new Error(formatError("Problem when getting drafts", error));
        }
      }
    });

    /**
     * Get all of the posts that are published
     */
    t.list.field("posts", {
      type: "Post",
      nullable: false,
      async resolve(_root, _args, context) {
        try {
          const posts = await context.db.post.findMany({
            where: {
              published: true
            }
          });
          return posts;
        } catch (error) {
          throw new Error(formatError("Problem when getting posts", error));
        }
      }
    });
  }
});

schema.extendType({
  type: "Mutation",
  definition(t) {
    t.field("createDraft", {
      type: "Post",
      nullable: false,
      args: {
        body: schema.stringArg({ required: true }),
        title: schema.stringArg({ required: true })
      },
      async resolve(_root, args, context) {
        try {
          const newDraft = await context.db.post.create({
            data: {
              title: args.title,
              body: args.body,
              published: false
            }
          });
          return newDraft;
        } catch (error) {
          throw new Error(
            formatError("Error when creating a new draft", error)
          );
        }
      }
    });
  }
});
