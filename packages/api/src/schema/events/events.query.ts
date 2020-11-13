import { objectType, queryField } from "@nexus/schema";

import {
  formatSchemaError,
  getAllCurrentFutureEvents,
  getAllPastEvents
} from "../../utils";

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

export const XYCoordinates = objectType({
  name: "XYCoordinates",
  definition(t) {
    t.string("y");
    t.string("x");
  }
});

export const CropMask = objectType({
  name: "CropMask",
  definition(t) {
    t.field("top_left", {
      type: XYCoordinates
    });
    t.int("width");
    t.int("height");
  }
});

export const Original = objectType({
  name: "OriginalImg",
  definition(t) {
    t.string("url");
    t.string("width");
    t.string("height");
  }
});

export const EventLogo = objectType({
  name: "EventLogo",
  definition(t) {
    t.string("id");
    t.string("url");
    t.field("crop_mask", {
      type: CropMask
    });
    t.field("original", {
      type: Original
    });
    t.string("aspect_ratio");
    t.string("edge_color");
    t.string("edge_color_set");
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
    t.field("logo", {
      type: EventLogo
    });
    t.boolean("is_free");
  }
});

export const EventsType = objectType({
  name: "Events",
  definition(t) {
    t.field("pagination", { type: "Pagination" });
    t.field("events", { type: "Event", list: true });
  }
});

export const AllEventsTypes = objectType({
  name: "AllEvents",
  definition(t) {
    t.field("pastEvents", { type: "Events" });
    t.field("futureEvents", { type: "Events" });
  }
});

export const EventQuery = queryField("allEvents", {
  type: "AllEvents",
  async resolve(_root, _args) {
    try {
      const [futureEvents, pastEvents] = await Promise.all([
        getAllCurrentFutureEvents(),
        getAllPastEvents()
      ]);

      return {
        futureEvents,
        pastEvents
      };
    } catch (error) {
      throw new Error(formatSchemaError("Problem when getting drafts", error));
    }
  }
});
