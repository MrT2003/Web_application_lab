import { Router } from "express";
import {
  CreateNewProgram,
  GetAllProgram,
  GetProgramByID,
  DeleteProgram,
  UpdateProgram,
} from "../handlers/programHandler.js";

const ProgramRouter = Router();
ProgramRouter.post("/", CreateNewProgram);
ProgramRouter.get("/", GetAllProgram);
ProgramRouter.get("/:pid", GetProgramByID);
ProgramRouter.delete("/:pid", DeleteProgram);
ProgramRouter.put("/:pid", UpdateProgram);
export default ProgramRouter;
