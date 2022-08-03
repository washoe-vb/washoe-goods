const { prop, modelOptions, PropType } = require("@typegoose/typegoose");

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
  @prop({ required: true, type: Number }, PropType.ARRAY)
  pushedAt: Array<number>;

  @prop({ required: true, type: Number }, PropType.ARRAY)
  answeredAt: Array<number>;

  @prop({ required: true, type: Number }, PropType.ARRAY)
  answers: Array<Answer>;
}

@modelOptions({ schemaOptions: { timestamps: { currentTime: Date.now } } })
export class Word extends WordSemantics {
  @prop({ required: true })
  stage!: number;

  @prop({ required: true })
  status!: WordStatus;

  @prop({ required: true })
  notifyAt!: number;

  @prop({ required: true })
  user!: string;

  @prop({ required: true })
  history!: History;

  @prop({ required: true })
  deletedAt!: number;
}
