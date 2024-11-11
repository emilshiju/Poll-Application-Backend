import express from "express"

import router from "./routes/route.js";

import cors from "cors";
import connectToMongo from "./config/config.js";
import http from "http";
import dotenv from 'dotenv';
import { Server } from "socket.io";
import socketConfig from "./controller/socket.js";
const app=express()



dotenv.config();




const server = http.createServer(app);

// app.use(cookieParser());




connectToMongo(()=>{
    console.log("connected succesfully mongo")
})


const allowedOrigins = [
    "http://localhost:5173",

  ];


  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); 
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  };


  function globalErrorHandler(err, req, res, next) {
    console.error(err.stack); 

  
    res.status(err.statusCode || 500).json({
        status: false,
        message: err.message || 'Something went wrong!',
    });
}



  
app.use(cors(corsOptions));
  
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});




socketConfig(io)


app.use(router)

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
