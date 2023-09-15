import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    detail1: {
      type: String,
    },
    detail2: {
      type: String,
    },
    detail3: {
      type: String,
    },
    detail4: {
      type: String,
    },
    detail5: {
      type: String,
    },
    detail6: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("plants", plantSchema);
