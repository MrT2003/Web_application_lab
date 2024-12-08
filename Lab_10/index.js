import express from "express"
import ProgramRouter from "./routes/programRoutes.js";
import CourseRouter from "./routes/courseRoutes.js";
import CourseProgramRouter from "./routes/courseProgramRoutes.js";
import {connectToDB} from "./DB/index.js";
const app = express()

app.use(express.json());
app.use("/api/program", ProgramRouter)
// app.use("/api/programs",ProgramRouter)
app.use("/api/course",CourseRouter)
// app.use("/api/courses",CourseRouter)
app.use("/api/course_program",CourseProgramRouter)


const PORT = process.env.POST || 5000; 

// Call method to connect DB
connectToDB()
    .then(()=>{
        app.listen(PORT,()=>console.log("Server is running on port: ",PORT));
    })
    .catch((error) =>{
        console.log("Fail to connect DB: ",error);
        process.exit(1);
    });