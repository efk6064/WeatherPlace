import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { errorHandling } from "./Middlewares/errorHandlingmiddleware.js";
import weatherRoute from "./Routs/weatherRoute.js";

config();

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/weather",weatherRoute);
app.use(errorHandling);

let port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`app is listening on port ${port}`)});

