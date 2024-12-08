import {
  DeleteProgramById,
  GetAllProgram as RepositoryGetAllProgram,
  GetProgramById as RepositoryGetProgramById,
  CreateNewProgram as RepositoryCreateNewProgram,
  UpdateProgram as RepositoryUpdateProgram,
} from "../repository/Program.js";
export const CreateNewProgram = async (req, res) => {
  return RepositoryCreateNewProgram(req, res);
};

export const GetAllProgram = async (req, res) => {
  return RepositoryGetAllProgram(req, res);
};

export const GetProgramByID = async (req, res) => {
  return RepositoryGetProgramById(req, res);
};

export const DeleteProgram = async (req, res) => {
  return DeleteProgramById(req, res);
};

export const UpdateProgram = async (req, res) => {
  return RepositoryUpdateProgram(req, res);
};
