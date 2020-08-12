"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyForgotPasswordToken = exports.getForgotPasswordToken = exports.verifyEmailToken = exports.getEmailToken = exports.verifyJsonWebToken = exports.getJsonWebToken = exports.matchHashedPasswords = exports.hashAndSaltUsersPassword = exports.validatePasswords = exports.verifyPasswordStrength = exports.verifyMaxPasswordLength = exports.verifyPasswordsMatch = exports.isAuthenticated = exports.genericAuthError = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
exports.genericAuthError = "That email address and password combination do not match";
const maxPasswordLength = 64;
const saltRounds = 12;
exports.isAuthenticated = (request) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.verify(request.cookies["access_token"], process.env.JWT_SECRET, {}, function (err, decoded) {
            if (!err && decoded) {
                resolve();
            }
            reject();
        });
    });
});
exports.verifyPasswordsMatch = (password, repeatPassword) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (password !== repeatPassword) {
            throw "Passwords do not match";
        }
        return;
    }
    catch (error) {
        throw error;
    }
});
exports.verifyMaxPasswordLength = (password) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (password.length > maxPasswordLength) {
            throw `Password is too long. Please write a password less than ${maxPasswordLength} characters`;
        }
        return;
    }
    catch (error) {
        throw error;
    }
});
exports.verifyPasswordStrength = (_password) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return;
    }
    catch (error) {
        throw error;
    }
});
exports.validatePasswords = (password, repeatPassword) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Promise.all([
            exports.verifyPasswordsMatch(password, repeatPassword),
            exports.verifyPasswordStrength(password),
            exports.verifyMaxPasswordLength(password)
        ]);
        return;
    }
    catch (error) {
        throw error;
    }
});
exports.hashAndSaltUsersPassword = (password) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.hash(password, saltRounds);
        return hashedPassword;
    }
    catch (error) {
        throw error;
    }
});
exports.matchHashedPasswords = (password, hash) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const match = yield bcrypt_1.compare(password, hash);
        if (match) {
            return true;
        }
        throw exports.genericAuthError;
    }
    catch (error) {
        throw "Unauthorized";
    }
});
exports.getJsonWebToken = (claims) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return jsonwebtoken_1.sign(claims, process.env.JWT_SECRET, {
            expiresIn: "1hr"
        });
    }
    catch (error) {
        throw "Problem when retrieving your access credentials";
    }
});
exports.verifyJsonWebToken = (token) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.verify(token, process.env.JWT_SECRET, {}, (error, decoded) => {
            if (!error && decoded) {
                resolve(true);
            }
            else {
                reject("Not Authorized");
            }
        });
    });
});
exports.getEmailToken = (claims) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return jsonwebtoken_1.sign(claims, process.env.JWT_EMAIL_SECRET, {
            expiresIn: "1hr"
        });
    }
    catch (error) {
        throw "Problem when generating confirmation email token";
    }
});
exports.verifyEmailToken = (token) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.verify(token, process.env.JWT_EMAIL_SECRET, {}, (error, decoded) => {
            if (!error && decoded) {
                resolve(true);
            }
            else {
                reject("Invalid token");
            }
        });
    });
});
exports.getForgotPasswordToken = (claims) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return jsonwebtoken_1.sign(claims, process.env.JWT_FORGOT_PASSWORD_SECRET, {
            expiresIn: "1hr"
        });
    }
    catch (error) {
        throw "Problem when generating forgot password token";
    }
});
exports.verifyForgotPasswordToken = (token, dbToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        if (token === dbToken) {
            jsonwebtoken_1.verify(token, process.env.JWT_FORGOT_PASSWORD_SECRET, {}, (error, decoded) => {
                if (!error && decoded) {
                    resolve(true);
                }
                else {
                    reject("Invalid token");
                }
            });
        }
        else {
            reject("Invalid token");
        }
    });
});
//# sourceMappingURL=Auth.utils.js.map