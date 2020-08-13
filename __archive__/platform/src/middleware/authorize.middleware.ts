import { AuthenticationError } from "apollo-server";
import { RequestHandler } from "express";
import jwt, { GetPublicKeyOrSecret, VerifyOptions } from "jsonwebtoken";
import jwksClient from "jwks-rsa";

import { DecodedAccessToken } from "../../types";

const jwtOptions: VerifyOptions = {
  audience: process.env.YELLO_API_AUDIENCE,
  issuer: process.env.YELLO_API_ISSUER,
  algorithms: ["RS256"]
};

const client = jwksClient({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `${process.env.YELLO_API_ISSUER}.well-known/jwks.json`
});

const getKeyFromClient: GetPublicKeyOrSecret = (header, callback) => {
  client.getSigningKey(header.kid as string, (err, key) => {
    if (err) {
      throw new Error(`Error getting the key from the JWKS client, ${err}`);
    }
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
};

const verifyAccessToken = (
  accessToken: string,
  callback: (decoded: DecodedAccessToken) => void
): void => {
  jwt.verify(
    accessToken,
    getKeyFromClient,
    jwtOptions,
    (err, decoded): void => {
      if (err) {
        throw new Error(JSON.stringify(err));
      }
      callback(decoded as DecodedAccessToken);
    }
  );
};

export const authorize: RequestHandler = async (request, response, next) => {
  try {
    const accessToken = request.get("Authorization");
    if (!accessToken || accessToken === "") {
      return next();
    }

    const parsedToken = accessToken.replace("Bearer ", "");
    verifyAccessToken(parsedToken, decodedAccessToken => {
      request.token = accessToken;
      request.userId = decodedAccessToken.sub;
      return next();
    });
  } catch (e) {
    return next(new AuthenticationError(e));
  }
};
