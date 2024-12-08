import { Router } from "express";
import {
  GetAllCourse,
  DeleteCourse,
  GetCourseByID,
  CreateNewCourse,
  UpdateCourse,
} from "../handlers/courseHandler.js";
const CourseRouter = Router();
CourseRouter.post("/", CreateNewCourse);
CourseRouter.get("/", GetAllCourse);
CourseRouter.get("/:cid", GetCourseByID);
CourseRouter.delete("/:cid", DeleteCourse);
CourseRouter.put("/:cid", UpdateCourse);
export default CourseRouter;
