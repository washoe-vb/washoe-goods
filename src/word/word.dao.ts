const { prop, modelOptions, PropType } = require("@typegoose/typegoose");
import { ObjectId } from "mongoose";

export enum Answer {
  IDoNotRemember = 0,
  IRemember = 1,
  IRememberVeryWell = 2,
}

export enum WordStatus {
  Idle = 0,
  Pushed = 1,
}

export class WordSemantics {
  @prop({ required: true })
  word!: string;

  @prop({ required: false })
  definition?: string;

  @prop({ required: false })
  example?: string;
}

@modelOptions({ schemaOptions: { _id: false } })
class History {
  @prop({ required: true, type: Date }, PropType.ARRAY)
  pushedAt: Array<Date>;

  @prop({ required: true, type: Date }, PropType.ARRAY)
  answeredAt: Array<Date>;

  @prop({ required: true, type: Number }, PropType.ARRAY)
  answers: Array<Answer>;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Word extends WordSemantics {
  @prop({ required: true })
  stage!: number;

  @prop({ required: true })
  status!: WordStatus;

  @prop({ required: true })
  timeToReview!: Date;

  @prop({ required: true })
  user!: string;

  @prop({ required: true })
  history!: History;

  @prop({ required: true })
  deletedAt!: Date;
}
