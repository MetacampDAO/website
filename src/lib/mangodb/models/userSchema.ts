import { model, Schema } from "mongoose";

export interface userInterface {
  // From Google
  googleId: string,
  displayName: string,
  firstName: string,
  lastName: string,
  image: string,
  createdAt: string,
  email: string,
  // From Form
  country: string, // Required
  introduction: string, // Required
  interest: Array<string>,
  groups: Array<string>,
  // Default
  eventsAttended: number,
}

const userSchema = new Schema({
  // From Google
  googleId: { type: String, required: true },
  displayName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now() },
  email: { type: String, required: true },
  // From Form
  country: { type: String }, // Required
  introduction: { type: String }, // Required
  interest: [{ type: Schema.Types.ObjectId, ref: "interests" }],
  groups: [{ type: Schema.Types.ObjectId, ref: "groups" }],
  // Default
  eventsAttended: { type: Number, default: 0 },
});

const userModel = model("users", userSchema);
export default userModel;
