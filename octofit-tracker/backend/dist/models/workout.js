import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    title: { type: String, required: true, unique: true },
    duration: { type: String, required: true },
    difficulty: { type: String, required: true },
});
export const WorkoutModel = mongoose.model('Workout', workoutSchema);
