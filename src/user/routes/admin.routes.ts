import { Router } from "express";
import CreateAdmin from "../controllers/admin/create.admin";

const AdminRoutes = Router();

AdminRoutes.post("/create", CreateAdmin.create);

export default AdminRoutes;
