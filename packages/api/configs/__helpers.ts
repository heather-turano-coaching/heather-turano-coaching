import {
  TestContext,
  createTestContext as originalCreateTestContext
} from "nexus/testing";

export function createTestContext(): NexusTestContextRoot {
  const context = {} as TestContext;

  beforeAll(async () => {
    Object.assign(context, await originalCreateTestContext());
    await context.app.start();
  });

  afterAll(async () => {
    await context.app.db.client.disconnect();
    await context.app.stop();
  });

  return context;
}
