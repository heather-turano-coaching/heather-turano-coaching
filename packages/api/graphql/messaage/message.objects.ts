import { schema } from "nexus";

schema.objectType({
  name: "Message",
  definition(t) {
    t.string("message");
  }
});
