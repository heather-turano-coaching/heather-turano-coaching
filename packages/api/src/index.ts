/* eslint-disable no-restricted-globals */
import { Router } from "./router";
import {
  subscribeToBlog,
  subscribeToBlogPreflight
} from "./workers/subscribeToBlog.worker";
import { responseHeaders } from "./util";

import { subscribeRoute } from "@heather-turano-coaching/domain";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const r = new Router();
  r.options(subscribeRoute, subscribeToBlogPreflight);
  r.post(subscribeRoute, subscribeToBlog);
  r.post("/blog/validate-email", subscribeToBlog);

  const response = (await r.route(request)) as Response;

  Object.entries(responseHeaders).forEach(([headerKey, headerValue]) =>
    response.headers.append(headerKey, headerValue)
  );

  return response;
}