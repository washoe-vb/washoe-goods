"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordModel = void 0;
const { getModelForClass } = require("@typegoose/typegoose");
const { Word } = require("./word.dao");
exports.WordModel = getModelForClass(Word);
