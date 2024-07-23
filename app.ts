import express, { Express,Request, Response } from "express";
import { start } from './src/shared/utils/server';
import bodyParser from "body-parser";
const cookieParser = require("cookie-parser");
import cors from "cors";
import pdfroute from './src/api/routes/pdf-routes'
const app: Express = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", pdfroute);

app.get("/", (req: Request, res: Response) => {
   return res.json({
      message:"Hello"
  });
});


const port: number = 8000;
start(app,port); 