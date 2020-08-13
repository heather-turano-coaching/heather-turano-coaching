"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = require("nexus");
nexus_1.schema.middleware((_config) => {
    return (root, args, context, info, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        context.log.info("before - middleware 1");
        const result = yield next(root, args, context, info);
        context.log.info("after - middleware 1");
        return result;
    });
});
//# sourceMappingURL=app.milddlewares.js.map