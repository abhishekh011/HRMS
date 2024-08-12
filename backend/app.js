import express from 'express';
import connectDB from './config/Dbconnection.js';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js';
import employeeRouter from './routes/employee.router.js';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
dotenv.config();

const port = process.env.PORT || 3000;
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/image', express.static(path.join(__dirname, 'image')));
app.use('/resumes', express.static(path.join(__dirname, './resume')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/employee',employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
