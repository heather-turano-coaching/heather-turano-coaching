/* eslint-disable no-restricted-globals */
import { responseHeaders } from "./utils/util";

import { subscribeRouter } from "./workers/subscribe";
import { Api } from "./utils/Api";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  // instantiate the API class
  const worker = new Api();

  // register routes
  worker.register(subscribeRouter);

  // match and run the route
  const response = await worker.route(request);

  /**
   * @todo find a better way to do this
   */
  Object.entries(responseHeaders).forEach(([headerKey, headerValue]) =>
    response.headers.append(headerKey, headerValue)
  );

  return response;
}
