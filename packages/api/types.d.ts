declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "production" | "development";
    SENDGRID_API_KEY: string;
    SENDGRID_ROOT_DOMAIN: string;
    SENDGRID_FROM_EMAIL: string;
    SENDGRID_TRANSACTIONAL_EMAIL__CONFIRM_EMAIL_ADDRESS: string;
    SENDGRID_TRANSACTIONAL_EMAIL__FORGOT_PASSWORD: string;
    JWT_SECRET: string;
    JWT_EMAIL_SECRET: string;
    JWT_FORGOT_PASSWORD_SECRET: string;
  }
}
