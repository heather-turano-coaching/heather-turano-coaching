"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var FontFamily_1 = require("./FontFamily");
exports.addFont = function (storyFn) { return (react_1["default"].createElement("div", null,
    react_1["default"].createElement(FontFamily_1.FontFamily, null),
    storyFn())); };
