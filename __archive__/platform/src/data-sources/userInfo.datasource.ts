import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import { HTCApiContext } from "../context";

export interface DataSources {
  userInfoApi: UserInfoApi;
}

export interface Auth0NormalizedUserIdentities {
  connection: string;
  isSocial: boolean;
  provider: string;
  user_id: string;
  profileData: any;
}

export interface Auth0UserMetaData {}

export interface Auth0NormalizedUser {
  app_metadata: object;
  blocked: boolean;
  created_at: string;
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  identities: Auth0NormalizedUserIdentities[];
  last_ip: string;
  last_login: string;
  last_password_reset: string;
  logins_count: number;
  multifactor: string;
  name: string;
  nickname: string;
  phone_number: string;
  phone_verified: boolean;
  picture: string;
  updated_at: string;
  user_id: string;
  user_metadata: Auth0UserMetaData;
  username: string;
}

/**
 * A DataSource to interface the Management API for Auth0
 * It is an abstraction that apollo provides to be able to
 * interface REST endpoints while de-duping requests
 * for the GraphQL roots
 *
 * Docs on Data Sources
 * https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source
 *
 * Auth0 API Methods to interface
 * Users: https://auth0.com/docs/api/management/v2#!/Users/get_users
 *
 */
export class UserInfoApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.YELLO_API_ISSUER as string;
  }

  willSendRequest(request: RequestOptions) {
    const context = this.context as HTCApiContext;
    if (context.token) {
      request.headers.set("Authorization", context.token);
    }
  }

  getUser(userId: string): Promise<Auth0NormalizedUser> {
    return this.get("userinfo");
  }
}
