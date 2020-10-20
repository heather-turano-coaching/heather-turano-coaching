import { objectType } from "@nexus/schema";

export const MessageObjects = objectType({
  name: "Message",
  definition(t) {
    t.string("message");
  }
});
