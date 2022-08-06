import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  _id: string;

  @prop({ required: true })
  email!: string;

  @prop({ required: true })
  password!: string;
}
