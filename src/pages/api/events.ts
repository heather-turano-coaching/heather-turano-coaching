import { convertParamsToQueryString } from "@htc/lib/endpoint";
import eventbrite from "eventbrite";
import { NextApiHandler } from "next";

const eventbriteClient = eventbrite({
  token: process.env.HTC_EVENTBRITE_PRIVATE_TOKEN
});

const events: NextApiHandler = async (req, res) => {
  const events = await eventbriteClient.request(
    `/organizations/${
      process.env.HTC_EVENTBRITE_ORG_ID
    }/events${convertParamsToQueryString(req.query)}`
  );
  res.status(200).json(events);
};

export default events;
