import mongoose, { Schema } from 'mongoose';
const leaderboardSchema = new Schema({
    rank: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    score: { type: Number, required: true },
});
export const LeaderboardModel = mongoose.model('LeaderboardEntry', leaderboardSchema);
