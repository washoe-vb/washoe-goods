import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
})
export class User {
  id: string;

  @prop({ required: true })
  email!: string;

  @prop({ required: true })
  password!: string;
}
