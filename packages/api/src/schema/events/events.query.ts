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

export const Event = objectType({
  name: "Event",
  definition(t) {
    t.field("name", { type: "MultipartText" });
  }
});

export const EventsType = objectType({
  name: "Events",
  definition(t) {
    t.field("pagination", { type: "Pagination" });
    t.field("list", { type: "Event", list: true });
  }
});

export const EventQuery = queryField("events", {
  type: "Events",
  async resolve(_root, _args) {
    try {
      const response = await getAllEvents();
      return {
        pagination: response.pagination,
        list: response.events
      };
    } catch (error) {
      throw new Error(formatSchemaError("Problem when getting drafts", error));
    }
  }
});
