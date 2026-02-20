import mongoose from "mongoose";
const PhraseSchema = new mongoose.Schema({
  text: { type: String, required: true },
  work: { type: String },
  category: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});
