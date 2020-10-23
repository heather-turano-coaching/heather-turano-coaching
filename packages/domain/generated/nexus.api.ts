import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CropMask = {
  __typename?: "CropMask";
  top_left?: Maybe<XyCoordinates>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
};

export type DatetimeTz = {
  __typename?: "DatetimeTZ";
  start?: Maybe<Scalars["String"]>;
  local?: Maybe<Scalars["String"]>;
  utc?: Maybe<Scalars["String"]>;
};

export type Event = {
  __typename?: "Event";
  name?: Maybe<MultipartText>;
  summary?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  start?: Maybe<DatetimeTz>;
  end?: Maybe<DatetimeTz>;
  created?: Maybe<Scalars["String"]>;
  changed?: Maybe<Scalars["String"]>;
  published?: Maybe<Scalars["String"]>;
  logo?: Maybe<EventLogo>;
};

export type EventLogo = {
  __typename?: "EventLogo";
  id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  crop_mask?: Maybe<CropMask>;
  original?: Maybe<OriginalImg>;
  aspect_ratio?: Maybe<Scalars["String"]>;
  edge_color?: Maybe<Scalars["String"]>;
  edge_color_set?: Maybe<Scalars["String"]>;
};

export type Events = {
  __typename?: "Events";
  pagination?: Maybe<Pagination>;
  events?: Maybe<Array<Maybe<Event>>>;
};

export type Message = {
  __typename?: "Message";
  message?: Maybe<Scalars["String"]>;
};

export type MultipartText = {
  __typename?: "MultipartText";
  text?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Validates the token against the users email address and set's the users account to CONFIRMED */
  confirmEmail?: Maybe<Message>;
  /** Verifies the users account status and if valid, sends an email with a link to reset their password */
  forgotPassword?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  /** Verifies the user's account status and if valid, sends a authorization cookie to the client in the response header */
  signIn?: Maybe<Scalars["Boolean"]>;
  /** Creates an account and sends a confirmation email to confirm the account */
  signUp?: Maybe<Message>;
  /** Verifies the validity of the reset password token */
  verifyResetPasswordToken?: Maybe<Scalars["Boolean"]>;
  /** Creates a stripe checkout session for a mindful movement 100 purchase */
  checkoutMindfulMovement?: Maybe<StripeCheckoutSession>;
  /** Creates a stripe checkout session for a heather turano coaching purchase */
  checkoutHeatherTuranoCoaching?: Maybe<StripeCheckoutSession>;
};

export type MutationConfirmEmailArgs = {
  token: Scalars["String"];
  emailAddress: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  emailAddress: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  token: Scalars["String"];
  emailAddress: Scalars["String"];
  password: Scalars["String"];
  repeatPassword: Scalars["String"];
};

export type MutationSignInArgs = {
  emailAddress: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignUpArgs = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  emailAddress: Scalars["String"];
  password: Scalars["String"];
  repeatPassword: Scalars["String"];
};

export type MutationVerifyResetPasswordTokenArgs = {
  token: Scalars["String"];
  emailAddress: Scalars["String"];
};

export type MutationCheckoutMindfulMovementArgs = {
  priceId: Scalars["String"];
};

export type MutationCheckoutHeatherTuranoCoachingArgs = {
  priceId: Scalars["String"];
};

export type OriginalImg = {
  __typename?: "OriginalImg";
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["String"]>;
};

export type Pagination = {
  __typename?: "Pagination";
  object_count?: Maybe<Scalars["Int"]>;
  page_number?: Maybe<Scalars["Int"]>;
  page_size?: Maybe<Scalars["Int"]>;
  page_count?: Maybe<Scalars["Int"]>;
  has_more_items?: Maybe<Scalars["Boolean"]>;
};

export type Query = {
  __typename?: "Query";
  events?: Maybe<Events>;
};

export type StripeCheckoutSession = {
  __typename?: "StripeCheckoutSession";
  /** The checkout session id that is used when a customer clicks on a product purchase button */
  id?: Maybe<Scalars["String"]>;
};

export type XyCoordinates = {
  __typename?: "XYCoordinates";
  y?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["String"]>;
};
