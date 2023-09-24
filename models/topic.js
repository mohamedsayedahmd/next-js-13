import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
// if you have already has this topic (will get it - no need to create a model)
export default Topic;
