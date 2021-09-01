import { eventbriteApi } from "@htc-website/lib/eventbrite";
import { convertParamsToQueryString } from "@htc-website/utils";
import { NextApiHandler } from "next";

const events: NextApiHandler = async (req, res) => {
  try {
    const events = await eventbriteApi.request(
      `/organizations/${
        process.env.HTC_EVENTBRITE_ORG_ID
      }/events${convertParamsToQueryString(req.query)}`
    );
    res.status(200).json(events);
  } catch (error) {
    res.status(400);
  }
};

export default events;
