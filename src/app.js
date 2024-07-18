import express from "express";
import morgan from "morgan";
import authRoute from "./routers/auth.router.js";
import cors from "cors";
import './utils/cronJobs.js';
import './utils/cronJobsLoan.js'

const app = express();
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(morgan("dev"));
app.use(express.json());


app.use("/api", authRoute);

export default app;
