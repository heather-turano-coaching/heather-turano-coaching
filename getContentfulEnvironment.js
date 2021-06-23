const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const contentfulManagement = require("contentful-management");

module.exports = async function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.HTC_CONTENTFUL_API_MANAGEMENT_ACCESS_TOKEN
  });

  const space = await contentfulClient.getSpace(
    process.env.HTC_CONTENTFUL_SPACE_ID
  );
  return await space.getEnvironment(process.env.HTC_CONTENTFUL_ENVIRONMENT);
};
