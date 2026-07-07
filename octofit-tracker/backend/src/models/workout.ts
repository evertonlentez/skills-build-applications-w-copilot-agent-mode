import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  duration: string;
  difficulty: string;
}

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true, unique: true },
  duration: { type: String, required: true },
  difficulty: { type: String, required: true },
});

export const WorkoutModel: Model<IWorkout> = mongoose.model<IWorkout>('Workout', workoutSchema);
