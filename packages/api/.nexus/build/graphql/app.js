"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("./app.env");
const nexus_1 = tslib_1.__importDefault(require("nexus"));
const nexus_plugin_prisma_1 = require("nexus-plugin-prisma");
nexus_1.default.use(nexus_plugin_prisma_1.prisma());
//# sourceMappingURL=app.js.map