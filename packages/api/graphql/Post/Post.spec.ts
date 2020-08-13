import { createTestContext } from "../../configs/__helpers";

const context = createTestContext();

it("ensures that a draft fan be created and published", async () => {
  const draftResult = await context.client.send(`
    mutation {
      createDraft(title: "Nexus", body: "...") {
        id
        title
        body
        published
      }
    }
  `);
  expect(draftResult).toMatchSnapshot();

  const persistedData = await context.app.db.client.post.findMany();
  expect(persistedData).toMatchInlineSnapshot();
});
