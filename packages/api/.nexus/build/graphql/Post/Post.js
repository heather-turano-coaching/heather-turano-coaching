"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = require("nexus");
const app_util_1 = require("../app.util");
nexus_1.schema.objectType({
    name: "Post",
    definition(t) {
        t.model.id();
        t.model.title();
        t.model.body();
        t.model.published();
    }
});
nexus_1.schema.extendType({
    type: "Query",
    definition(t) {
        t.list.field("drafts", {
            type: "Post",
            nullable: false,
            resolve(_root, _args, context) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    try {
                        const posts = yield context.db.post.findMany({
                            where: {
                                published: false
                            }
                        });
                        return posts;
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Problem when getting drafts", error));
                    }
                });
            }
        });
        t.list.field("posts", {
            type: "Post",
            nullable: false,
            resolve(_root, _args, context) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    try {
                        const posts = yield context.db.post.findMany({
                            where: {
                                published: true
                            }
                        });
                        return posts;
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Problem when getting posts", error));
                    }
                });
            }
        });
    }
});
nexus_1.schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("createDraft", {
            type: "Post",
            nullable: false,
            args: {
                body: nexus_1.schema.stringArg({ required: true }),
                title: nexus_1.schema.stringArg({ required: true })
            },
            resolve(_root, args, context) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    try {
                        const newDraft = yield context.db.post.create({
                            data: {
                                title: args.title,
                                body: args.body,
                                published: false
                            }
                        });
                        return newDraft;
                    }
                    catch (error) {
                        throw new Error(app_util_1.formatError("Error when creating a new draft", error));
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=Post.js.map