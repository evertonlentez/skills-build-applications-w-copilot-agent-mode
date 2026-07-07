import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  rank: number;
  name: string;
  score: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  rank: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  score: { type: Number, required: true },
});

export const LeaderboardModel: Model<ILeaderboardEntry> = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);
