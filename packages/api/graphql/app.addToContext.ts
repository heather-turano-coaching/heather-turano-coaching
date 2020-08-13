import { schema } from "nexus";

schema.addToContext((req) => ({
  req,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  res: req.res as Response
}));
