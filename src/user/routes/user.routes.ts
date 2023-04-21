import { Router } from "express";
import CreateUser from "../controllers/user/create.user";
import LoginUser from "../controllers/user/login.user";
import DeleteUser from "../controllers/user/delete.user";
import AlertUser from "../controllers/user/alter.user";
import ReadUser from "../controllers/user/read.user";

const UserRoutes = Router();

UserRoutes.post("/create", CreateUser.create)
  .post("/login", LoginUser.login)
  .delete("/delete/:id", DeleteUser.delete)
  .put("/alter/:id", AlertUser.alert)
  .get("/", ReadUser.all)
  .get("/:id", ReadUser.unique);

export default UserRoutes;
