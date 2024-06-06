import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.get("/", (req, res) => {
    const cookies = req.cookies;
    res.send(cookies);
});

export default app;