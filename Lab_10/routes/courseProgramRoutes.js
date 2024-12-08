import { Router } from "express";
import {
  InsertCourseProgram,
  GetAllCP,
  GetCPByName,
  DeleteCourseProgram,
} from "../handlers/courseProgramHandler.js";
const CourseProgramRouter = Router();
CourseProgramRouter.post("/", InsertCourseProgram);
CourseProgramRouter.get("/", GetAllCP);
CourseProgramRouter.get("/:program_name", GetCPByName);
CourseProgramRouter.delete("/:course_name/:program_name", DeleteCourseProgram);
export default CourseProgramRouter;
