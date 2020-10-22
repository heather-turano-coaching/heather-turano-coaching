import { objectType, queryField } from "@nexus/schema";

import { formatSchemaError, getAllEvents } from "../../utils";

export const MultiPartText = objectType({
  name: "MultipartText",
  definition(t) {
    t.string("text");
    t.string("html");
  }
});

export const Pagination = objectType({
  name: "Pagination",
  definition(t) {
    t.int("object_count");
    t.int("page_number");
    t.int("page_size");
    t.int("page_count");
    t.boolean("has_more_items");
  }
});

export const DatetimeTZ = objectType({
  name: "DatetimeTZ",
  definition(t) {
    t.string("start");
    t.string("local");
    t.string("utc");
  }
});

export const Event = objectType({
  name: "Event",
  definition(t) {
    t.field("name", { type: "MultipartText" });
    t.string("summary");
    t.string("description");
    t.string("url");
    t.field("start", { type: "DatetimeTZ" });
    t.field("end", { type: "DatetimeTZ" });
    t.string("created");
    t.string("changed");
    t.string("published");
  }
});

export const EventsType = objectType({
  name: "Events",
  definition(t) {
    t.field("pagination", { type: "Pagination" });
    t.field("events", { type: "Event", list: true });
  }
});

export const EventQuery = queryField("events", {
  type: "Events",
  async resolve(_root, _args) {
    try {
      const response = await getAllEvents();
      return response;
    } catch (error) {
      throw new Error(formatSchemaError("Problem when getting drafts", error));
    }
  }
});
