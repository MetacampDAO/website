import { model, Schema } from "mongoose";

const interestSchema = new Schema({
  groupId: { type: Schema.Types.ObjectId, ref: "events" },
  userInfo: { type: Schema.Types.ObjectId, ref: "users" },
});

const listingModel = model("interests", interestSchema);
export default listingModel;
