"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const user_model_1 = require("./user.model");
exports.UserModel = (0, typegoose_1.getModelForClass)(user_model_1.User);
