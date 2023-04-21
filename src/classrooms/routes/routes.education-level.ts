import { Router } from "express";
import {
  AlterEducationLevel,
  DeleteEducationLevel,
  ReadEducationLevel,
  createEducationLevel,
} from "../controller/EducationLevel";
import Auth from "../../infra/middleware/auth";

const EducationLevelRoutes = Router();

// EDUCATION LEVEL ROUTES
EducationLevelRoutes.get("/", Auth, ReadEducationLevel.all)
  .get("/:id", Auth, ReadEducationLevel.unique)
  .post("/create/", Auth, createEducationLevel.create)
  .put("/alter/:id", Auth, AlterEducationLevel.alter)
  .delete("/delete/:id", Auth, DeleteEducationLevel.delete);

export default EducationLevelRoutes;
