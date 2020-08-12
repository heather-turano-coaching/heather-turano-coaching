import { compare, hash } from "bcrypt";
import type { Request } from "express";
import { sign, verify } from "jsonwebtoken";

export const genericAuthError =
  "That email address and password combination do not match";

// needed for bCrypt
const maxPasswordLength = 64;
const saltRounds = 12;

export type JwtClaims = {
  sub: string;
  name: string;
};

export type JwtEmailClaims = {
  email: string;
};

export type JwtForgotPasswordClaims = {
  email: string;
};

export const isAuthenticated = async (request: Request): Promise<void> =>
  new Promise((resolve, reject) => {
    verify(
      request.cookies["access_token"],
      process.env.JWT_SECRET,
      {},
      function (err, decoded) {
        if (!err && decoded) {
          resolve();
        }
        reject();
      }
    );
  });

export const verifyPasswordsMatch = async (
  password: string,
  repeatPassword: string
): Promise<void> => {
  try {
    if (password !== repeatPassword) {
      throw "Passwords do not match";
    }
    return;
  } catch (error) {
    throw error;
  }
};

export const verifyMaxPasswordLength = async (
  password: string
): Promise<void> => {
  try {
    if (password.length > maxPasswordLength) {
      throw `Password is too long. Please write a password less than ${maxPasswordLength} characters`;
    }
    return;
  } catch (error) {
    throw error;
  }
};

export const verifyPasswordStrength = async (
  password: string
): Promise<void> => {
  try {
    // @todo
    return;
  } catch (error) {
    throw error;
  }
};

export const validatePasswords = async (
  password: string,
  repeatPassword: string
): Promise<void> => {
  try {
    await Promise.all([
      verifyPasswordsMatch(password, repeatPassword),
      verifyPasswordStrength(password),
      verifyMaxPasswordLength(password)
    ]);
    return;
  } catch (error) {
    throw error;
  }
};

export const hashAndSaltUsersPassword = async (
  password: string
): Promise<string> => {
  try {
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

export const matchHashedPasswords = async (
  password: string,
  hash: string
): Promise<boolean> => {
  try {
    const match = await compare(password, hash);
    if (match) {
      return true;
    }
    throw genericAuthError;
  } catch (error) {
    throw "Unauthorized";
  }
};

export const getJsonWebToken = async (claims: JwtClaims): Promise<string> => {
  try {
    return sign(claims, process.env.JWT_SECRET, {
      expiresIn: "1hr"
    });
  } catch (error) {
    throw "Problem when retrieving your access credentials";
  }
};

export const verifyJsonWebToken = async (token: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    verify(token, process.env.JWT_SECRET, {}, (error, decoded) => {
      if (!error && decoded) {
        resolve(true);
      } else {
        reject("Not Authorized");
      }
    });
  });

export const getEmailToken = async (
  claims: JwtEmailClaims
): Promise<string> => {
  try {
    return sign(claims, process.env.JWT_EMAIL_SECRET, {
      expiresIn: "1hr"
    });
  } catch (error) {
    throw "Problem when generating confirmation email token";
  }
};

export const verifyEmailToken = async (token: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    verify(token, process.env.JWT_EMAIL_SECRET, {}, (error, decoded) => {
      if (!error && decoded) {
        resolve(true);
      } else {
        reject("Invalid token");
      }
    });
  });

export const getForgotPasswordToken = async (
  claims: JwtForgotPasswordClaims
): Promise<string> => {
  try {
    return sign(claims, process.env.JWT_FORGOT_PASSWORD_SECRET, {
      expiresIn: "1hr"
    });
  } catch (error) {
    throw "Problem when generating forgot password token";
  }
};

export const verifyForgotPasswordToken = async (
  token: string,
  dbToken: string
): Promise<boolean> =>
  new Promise((resolve, reject) => {
    if (token === dbToken) {
      verify(
        token,
        process.env.JWT_FORGOT_PASSWORD_SECRET,
        {},
        (error, decoded) => {
          if (!error && decoded) {
            resolve(true);
          } else {
            reject("Invalid token");
          }
        }
      );
    } else {
      reject("Invalid token");
    }
  });
