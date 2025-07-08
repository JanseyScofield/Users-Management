import express from "express";
import userRouters from "./routes/user.routes";

const app = express();
app.use(express.json());


app.listen(3000, () => console.log("Server is running"));