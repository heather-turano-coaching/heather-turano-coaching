import { PrismaClient } from "@prisma/client";

import { DataSources } from "./dataSources";

const prisma = new PrismaClient();

export interface HTCApiContext {
  prisma: PrismaClient;
  request: Express.Request;
  response: Express.Response;
  userId: Express.Request["userId"];
  token: Express.Request["token"];
}

export type DynamicResolverContext = HTCApiContext & {
  dataSources: DataSources;
};

export const createContext = ({
  req,
  res,
}: {
  req: Express.Request;
  res: Express.Response;
}): HTCApiContext => ({
  prisma,
  request: req,
  response: res,
  userId: req.userId || undefined,
  token: req.token || undefined,
});
