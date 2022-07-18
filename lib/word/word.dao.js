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
exports.Word = exports.WordData = void 0;
const { prop } = require("@typegoose/typegoose");
var Answer;
(function (Answer) {
    Answer[Answer["IDoNotRemember"] = 0] = "IDoNotRemember";
    Answer[Answer["IRemember"] = 1] = "IRemember";
    Answer[Answer["IRememberVeryWell"] = 2] = "IRememberVeryWell";
})(Answer || (Answer = {}));
var WordStatus;
(function (WordStatus) {
    WordStatus[WordStatus["Idle"] = 0] = "Idle";
    WordStatus[WordStatus["Pushed"] = 1] = "Pushed";
    WordStatus[WordStatus["Deleted"] = -1] = "Deleted";
})(WordStatus || (WordStatus = {}));
class WordData {
}
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], WordData.prototype, "word", void 0);
__decorate([
    prop({ required: false }),
    __metadata("design:type", String)
], WordData.prototype, "definition", void 0);
__decorate([
    prop({ required: false }),
    __metadata("design:type", String)
], WordData.prototype, "example", void 0);
exports.WordData = WordData;
class Word extends WordData {
}
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
    __metadata("design:type", Number)
], Word.prototype, "createdAt", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Word.prototype, "notifyAt", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Word.prototype, "user", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Object)
], Word.prototype, "history", void 0);
exports.Word = Word;
