import mongoose from 'mongoose';
import { UserModel } from '../models/user.js';
import { TeamModel } from '../models/team.js';
import { ActivityModel } from '../models/activity.js';
import { LeaderboardModel } from '../models/leaderboard.js';
import { WorkoutModel } from '../models/workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            UserModel.deleteMany({}),
            TeamModel.deleteMany({}),
            ActivityModel.deleteMany({}),
            LeaderboardModel.deleteMany({}),
            WorkoutModel.deleteMany({}),
        ]);
        await UserModel.insertMany([
            { name: 'Ava Chen', email: 'ava@example.com', role: 'Captain', focus: 'Strength' },
            { name: 'Noah Brooks', email: 'noah@example.com', role: 'Member', focus: 'Endurance' },
            { name: 'Mina Patel', email: 'mina@example.com', role: 'Coach', focus: 'Mobility' },
        ]);
        await TeamModel.insertMany([
            { name: 'North Stars', members: 8, goal: 'Weekly challenge' },
            { name: 'River Runners', members: 6, goal: 'Marathon prep' },
        ]);
        await ActivityModel.insertMany([
            { type: 'Run', duration: '35m', calories: 320 },
            { type: 'Yoga', duration: '25m', calories: 180 },
            { type: 'Cycling', duration: '45m', calories: 410 },
        ]);
        await LeaderboardModel.insertMany([
            { rank: 1, name: 'Ava Chen', score: 980 },
            { rank: 2, name: 'Noah Brooks', score: 912 },
            { rank: 3, name: 'Mina Patel', score: 874 },
        ]);
        await WorkoutModel.insertMany([
            { title: 'HIIT Circuit', duration: '30m', difficulty: 'Intermediate' },
            { title: 'Recovery Flow', duration: '20m', difficulty: 'Easy' },
            { title: 'Tempo Run', duration: '40m', difficulty: 'Advanced' },
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
