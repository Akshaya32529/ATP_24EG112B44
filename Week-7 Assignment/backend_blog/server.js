import exp from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')
import { connect } from 'mongoose'
import { userApp } from './APIs/userAPI.js'
import { authorApp } from './APIs/authorAPI.js'
import { adminApp } from './APIs/adminAPI.js'
import { commonApp } from './APIs/commonAPI.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = exp()

//add cookie parser middleware
app.use(cookieParser())
//body paser middleware
app.use(exp.json())

const allowedOrigins = [
  "http://localhost:5173",
  "https://atp-24-eg-112-b44.vercel.app"
];

const allowedOrigins = [
  "http://localhost:5173",
  "https://atp-24-eg-112-b44.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {

    // allow requests without origin
    if (!origin) {
      return callback(null, true);
    }

    // allow localhost + vercel
    if (
      allowedOrigins.includes(origin) ||
      origin.includes("vercel.app")
    ) {
      return callback(null, origin);
    }

    // reject other origins
    return callback(new Error("Not allowed by CORS"));
  },

  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// handle preflight requests

app.use("/auth", commonApp)
app.use("/user", userApp)
app.use("/author", authorApp)
app.use("/admin", adminApp)

const connectDB = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL is not defined in .env file")
    }
    await connect(process.env.DB_URL)
    console.log("database connected")
    const port = process.env.PORT || 4000
    app.listen(port, () => {
      console.log(`server is running on port ${port}`)
    })
  }
  catch (error) {
    console.log("error is db connect ", error)
  }
}

connectDB()

app.get("/", (req, res) => {
  res.send("hello world")
})

//handle invalid path
app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json({ message: `path ${req.url} is invalid` });
});
//to handle eerrors
app.use((err, req, res, next) => {
  console.log("error is ", err)
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  //send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
});

export default app;

