import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  members: number;
  goal: string;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  members: { type: Number, required: true },
  goal: { type: String, required: true },
});

export const TeamModel: Model<ITeam> = mongoose.model<ITeam>('Team', teamSchema);
