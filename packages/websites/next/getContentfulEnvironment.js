import { createClient } from "contentful-management";

export default async function () {
  const contentfulClient = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
  });

  const space = await contentfulClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  );
  return await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);
}
