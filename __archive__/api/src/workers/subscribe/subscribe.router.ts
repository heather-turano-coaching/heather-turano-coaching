import { Router } from "../../utils/Router";

import { subscribeToBlog, subscribeTo100Days } from "./subscribe.worker";
import { autoApprove } from "../../utils/response";

export const subscribeRouter = new Router();

subscribeRouter.options("/subscribe", autoApprove);
subscribeRouter.post("/subscribe", subscribeTo100Days);

subscribeRouter.options("/subscribe/blog", autoApprove);
subscribeRouter.post("/subscribe/blog", subscribeToBlog);

subscribeRouter.options("/subscribe/hundred-days", autoApprove);
subscribeRouter.post("/subscribe/hundred-days", subscribeTo100Days);
