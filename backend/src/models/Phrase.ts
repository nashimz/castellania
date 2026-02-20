import mongoose, { Schema, Document } from "mongoose";

export interface IPhrase extends Document {
  text: string;
  work: string;
  category: string;
  author: mongoose.Types.ObjectId;
}

const PhraseSchema: Schema = new Schema({
  text: { type: String, required: true },
  work: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
});

export default mongoose.model<IPhrase>("Phrase", PhraseSchema);
