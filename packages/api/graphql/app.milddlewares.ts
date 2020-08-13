import { schema } from "nexus";

// Authorization Middlware
schema.middleware((_config) => {
  return async (root, args, context, info, next) => {
    // if the auth token exists
    // verify the token
    //
    // if the auth token doesn't exist
    // send the user onto the next one
    //
    // Check the GraphQL Shield
    context.log.info("before - middleware 1");
    const result = await next(root, args, context, info);
    context.log.info("after - middleware 1");
    return result;
  };
});
