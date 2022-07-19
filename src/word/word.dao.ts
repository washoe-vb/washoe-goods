const { prop, PropType } = require("@typegoose/typegoose");

export enum Answer {
  IDoNotRemember = 0,
  IRemember = 1,
  IRememberVeryWell = 2,
}

export enum WordStatus {
  Idle = 0,
  Pushed = 1,
  Deleted = -1,
}

export class WordData {
  @prop({ required: true })
  word!: string;

  @prop({ required: false })
  definition?: string;

  @prop({ required: false })
  example?: string;
}

class History {
  @prop({ required: true, type: Number }, PropType.ARRAY)
  pushedAt: Array<number>;

  @prop({ required: true, type: Number }, PropType.ARRAY)
  answeredAt: Array<number>;

  @prop({ required: true, type: Number }, PropType.ARRAY)
  answers: Array<Answer>;
}

export class Word extends WordData {
  @prop({ required: true })
  stage!: number;

  @prop({ required: true })
  status!: WordStatus;

  @prop({ required: true })
  createdAt!: number;

  @prop({ required: true })
  notifyAt!: number;

  @prop({ required: true })
  user!: string;

  @prop({ required: true })
  history!: History;
}
