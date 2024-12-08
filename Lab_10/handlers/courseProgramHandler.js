import {
  InsertNewCourseProgram,
  GetAllCourseProgram,
  GetCourseProgramByName,
  DeleteCourseProgramByName,
} from "../repository/CourseProgram.js";

export const InsertCourseProgram = async (req, res) => {
  return InsertNewCourseProgram(req, res);
};

export const GetAllCP = async (req, res) => {
  return GetAllCourseProgram(req, res);
};

export const GetCPByName = async (req, res) => {
  return GetCourseProgramByName(req, res);
};

export const DeleteCourseProgram = async (req, res) => {
  return DeleteCourseProgramByName(req, res);
};
