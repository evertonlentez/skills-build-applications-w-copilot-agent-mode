import mongoose, { Schema } from 'mongoose';
const activitySchema = new Schema({
    type: { type: String, required: true },
    duration: { type: String, required: true },
    calories: { type: Number, required: true },
});
export const ActivityModel = mongoose.model('Activity', activitySchema);
