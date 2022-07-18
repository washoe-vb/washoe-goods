const { getModelForClass } = require("@typegoose/typegoose");
const { Word } = require("./word.dao");

export const WordModel = getModelForClass(Word);
