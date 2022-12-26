import env from 'dotenv';
env.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mainserver.8crzy.mongodb.net/${process.env.DB_CLUSTER}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
  .catch((err) => console.log(err.message));

