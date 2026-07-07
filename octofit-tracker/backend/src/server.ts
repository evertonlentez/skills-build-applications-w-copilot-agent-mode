import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import { UserModel } from './models/user.js';
import { TeamModel } from './models/team.js';
import { ActivityModel } from './models/activity.js';
import { LeaderboardModel } from './models/leaderboard.js';
import { WorkoutModel } from './models/workout.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

function getApiBaseUrl() {
  const codespaceName = process.env.CODESPACE_NAME;
  return codespaceName ? `https://${codespaceName}-8000.app.github.dev` : 'http://localhost:8000';
}

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    message: 'OctoFit Tracker API',
    baseUrl: getApiBaseUrl(),
    endpoints: ['/api/health', '/api/users', '/api/teams', '/api/activities', '/api/leaderboard', '/api/workouts'],
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker backend is running', baseUrl: getApiBaseUrl() });
});

app.get(['/api/users', '/api/users/'], async (_req, res) => {
  try {
    const users = await UserModel.find({}).lean();
    res.json({ count: users.length, results: users });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch users', details: error });
  }
});

app.post(['/api/users', '/api/users/'], async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create user', details: error });
  }
});

app.get(['/api/teams', '/api/teams/'], async (_req, res) => {
  try {
    const teams = await TeamModel.find({}).lean();
    res.json({ count: teams.length, results: teams });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch teams', details: error });
  }
});

app.post(['/api/teams', '/api/teams/'], async (req, res) => {
  try {
    const team = await TeamModel.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create team', details: error });
  }
});

app.get(['/api/activities', '/api/activities/'], async (_req, res) => {
  try {
    const activities = await ActivityModel.find({}).lean();
    res.json({ count: activities.length, results: activities });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch activities', details: error });
  }
});

app.post(['/api/activities', '/api/activities/'], async (req, res) => {
  try {
    const activity = await ActivityModel.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create activity', details: error });
  }
});

app.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
  try {
    const leaderboard = await LeaderboardModel.find({}).lean();
    res.json({ count: leaderboard.length, results: leaderboard });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch leaderboard', details: error });
  }
});

app.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
  try {
    const workouts = await WorkoutModel.find({}).lean();
    res.json({ count: workouts.length, results: workouts });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch workouts', details: error });
  }
});

app.post(['/api/workouts', '/api/workouts/'], async (req, res) => {
  try {
    const workout = await WorkoutModel.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create workout', details: error });
  }
});

async function startServer() {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
}

startServer();
