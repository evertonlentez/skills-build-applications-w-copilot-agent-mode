import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    members: { type: Number, required: true },
    goal: { type: String, required: true },
});
export const TeamModel = mongoose.model('Team', teamSchema);
