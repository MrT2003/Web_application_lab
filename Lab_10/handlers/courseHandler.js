import {
  CreateNewCourse as RepositoryCreateNewCourse,
  GetAllCourse as RepositoryGetAllCourse,
  GetCourseById as RepositoryGetCourseById,
  DeleteCourseById as RepositoryDeleteCourseById,
  UpdateCourse as RepositoryUpdateCourse,
} from "../repository/Course.js";

export const CreateNewCourse = async (req, res) => {
  return RepositoryCreateNewCourse(req, res);
};

export const GetAllCourse = async (req, res) => {
  return RepositoryGetAllCourse(req, res);
};

export const GetCourseByID = async (req, res) => {
  return RepositoryGetCourseById(req, res);
};

export const DeleteCourse = async (req, res) => {
  return RepositoryDeleteCourseById(req, res);
};

export const UpdateCourse = async (req, res) => {
  return RepositoryUpdateCourse(req, res);
};
