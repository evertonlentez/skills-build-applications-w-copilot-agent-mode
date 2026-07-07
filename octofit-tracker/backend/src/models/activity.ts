import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IActivity extends Document {
  type: string;
  duration: string;
  calories: number;
}

const activitySchema = new Schema<IActivity>({
  type: { type: String, required: true },
  duration: { type: String, required: true },
  calories: { type: Number, required: true },
});

export const ActivityModel: Model<IActivity> = mongoose.model<IActivity>('Activity', activitySchema);
