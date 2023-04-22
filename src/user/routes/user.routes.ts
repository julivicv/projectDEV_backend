import { Router } from "express";
import CreateUser from "../controllers/user/create.user";
import LoginUser from "../controllers/user/login.user";
import DeleteUser from "../controllers/user/delete.user";
import AlertUser from "../controllers/user/alter.user";
import ReadUser from "../controllers/user/read.user";
import Auth from "../../infra/middleware/auth";
import CardUser from "../controllers/user/card.user";
import { upload } from "../../utils/multer";

const UserRoutes = Router();

UserRoutes.post(
  "/create",
  [Auth, upload.single("photoFile")],
  CreateUser.create
)
  .post("/login", LoginUser.login)
  .delete("/delete/:id", Auth, DeleteUser.delete)
  .put("/alter/:id", Auth, AlertUser.alert)
  .get("/", Auth, ReadUser.all)
  .get("/:id", Auth, ReadUser.unique)
  .get("/card/:id", Auth, CardUser.view);

export default UserRoutes;
