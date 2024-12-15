// import express from "express";
// import dotenv from "dotenv";
// import mongoose from 'mongoose';
// import cors from "cors";
// import morgan from "morgan";
// import bodyParser from "body-parser";
// import path from "path";
// import helmet from "helmet";
// import dbConnection from "./dbConfig/index.js";
// import errorMiddleware from "./middleware/errorMiddleware.js";
// import router from "./routes/index.js";                         

// const __dirname = path.resolve(path.dirname(""));

// dotenv.config();

// const app = express();

// app.use(express.static(path.join(__dirname, "views/build")));

// const PORT = process.env.PORT || 3000;

// dbConnection();



// app.get("/api/register",(req,res)=>{
//   res.send("Yeh hai register")
// })

// app.use(helmet());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan("dev"));
// app.use("/api",router);

// //error middleware
// app.use(errorMiddleware);

// app.listen(PORT, () => {
//   console.log(`Server running on port: ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import dbConnection from "./dbConfig/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/index.js";                         

const __dirname = path.resolve(path.dirname(""));

dotenv.config();

const app = express();

// Static files setup
app.use(express.static(path.join(__dirname, "views/build")));

const PORT = process.env.PORT || 3000;

dbConnection();

// Test route for `/api/register` to see if the API is responsive
app.get("/api/register",(req,res)=>{
  res.send("Yeh hai register")
})

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Add logging to verify if the routes are working correctly
app.use("/api", (req, res, next) => {
  console.log("API Request received:", req.method, req.originalUrl);
  next();  // Pass control to the next middleware (router)
});

app.use("/api", router);

// Error middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
