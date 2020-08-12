export const mailchimpCredentials = Buffer.from(
  `anystring:${process.env.MAILCHIMP_API_KEY}`
).toString("base64");

export const mailchimpBaseUrl = `https://us4.api.mailchimp.com/3.0`;

export const mailchimpHeaders = {
  Authorization: `Basic ${mailchimpCredentials}`
};
