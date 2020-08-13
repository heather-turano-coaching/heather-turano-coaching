declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "production" | "development";
    SENDGRID_API_KEY: string | undefined;
    SENDGRID_ROOT_DOMAIN: string | undefined;
    SENDGRID_FROM_EMAIL: string | undefined;
    SENDGRID_TRANSACTIONAL_EMAIL__CONFIRM_EMAIL_ADDRESS: string | undefined;
    SENDGRID_TRANSACTIONAL_EMAIL__FORGOT_PASSWORD: string | undefined;
    JWT_SECRET: string | undefined;
    JWT_EMAIL_SECRET: string | undefined;
    JWT_FORGOT_PASSWORD_SECRET: string | undefined;
    HTC_MINDFUL_MOVEMENT_REDIRECT_ROOT_URL: string | undefined;
    HTC_STRIPE_SECRET_KEY: string | undefined;
  }
}
