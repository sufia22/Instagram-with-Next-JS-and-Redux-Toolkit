import mongoose from "mongoose";

// create post Schema
const postSchema = mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
      trim: true,
    },
    caption: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export post schema
export default mongoose.models.Post || mongoose.model("Post", postSchema);
