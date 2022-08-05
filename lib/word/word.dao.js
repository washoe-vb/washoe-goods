"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = exports.DictionaryEntry = exports.WordStatus = exports.Answer = void 0;
const { prop, modelOptions, PropType } = require("@typegoose/typegoose");
var Answer;
(function (Answer) {
    Answer[Answer["IDoNotRemember"] = 0] = "IDoNotRemember";
    Answer[Answer["IRemember"] = 1] = "IRemember";
    Answer[Answer["IRememberVeryWell"] = 2] = "IRememberVeryWell";
})(Answer = exports.Answer || (exports.Answer = {}));
var WordStatus;
(function (WordStatus) {
    WordStatus[WordStatus["Idle"] = 0] = "Idle";
    WordStatus[WordStatus["Pushed"] = 1] = "Pushed";
})(WordStatus = exports.WordStatus || (exports.WordStatus = {}));
class DictionaryEntry {
}
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], DictionaryEntry.prototype, "word", void 0);
__decorate([
    prop({ required: false }),
    __metadata("design:type", String)
], DictionaryEntry.prototype, "definition", void 0);
__decorate([
    prop({ required: false }),
    __metadata("design:type", String)
], DictionaryEntry.prototype, "example", void 0);
exports.DictionaryEntry = DictionaryEntry;
let History = class History {
};
__decorate([
    prop({ required: true, type: Date }, PropType.ARRAY),
    __metadata("design:type", Array)
], History.prototype, "pushedAt", void 0);
__decorate([
    prop({ required: true, type: Date }, PropType.ARRAY),
    __metadata("design:type", Array)
], History.prototype, "answeredAt", void 0);
__decorate([
    prop({ required: true, type: Number }, PropType.ARRAY),
    __metadata("design:type", Array)
], History.prototype, "answers", void 0);
History = __decorate([
    modelOptions({ schemaOptions: { _id: false } })
], History);
let Word = class Word extends DictionaryEntry {
};
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Word.prototype, "stage", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Word.prototype, "status", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Date)
], Word.prototype, "reviewAt", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Word.prototype, "user", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", History)
], Word.prototype, "history", void 0);
__decorate([
    prop({ required: false }),
    __metadata("design:type", Date)
], Word.prototype, "deletedAt", void 0);
Word = __decorate([
    modelOptions({ schemaOptions: { timestamps: true, id: true } })
], Word);
exports.Word = Word;
