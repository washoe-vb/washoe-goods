import { getModelForClass } from "@typegoose/typegoose";
import { User } from "./user.model";

export const UserModel = getModelForClass(User);
