"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
nexus_1.schema.addToContext((req) => ({
    req,
    res: req.res
}));
//# sourceMappingURL=app.addToContext.js.map