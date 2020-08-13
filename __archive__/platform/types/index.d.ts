// import { AuthContext } from '@heather-turano-coaching/common-services';
export {};

declare global {
  namespace Express {
    export interface Request {
      userId: string | undefined;
      token: string | undefined;
    }
  }
}

export interface DecodedAccessToken {
  iss: string;
  sub: string;
  aud: string[];
  iat: number;
  exp: number;
  azp: string;
  scope: string;
  permissions: string[];
}
