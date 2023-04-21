import { Router } from "express";
import EducationLevelRoutes from "../../classrooms/routes/routes.education-level";
import CourseRoutes from "../../classrooms/routes/course.prisma";
import ClassRoomRoutes from "../../classrooms/routes/routes.classRoom";
import UserRoutes from "../../user/routes/user.routes";
import AdminRoutes from "../../user/routes/admin.routes";

const routes = Router();

// Defoault route
routes.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the API",
  });
});
// Education Level routes
routes.use("/educationLevel", EducationLevelRoutes);
// Course routes
routes.use("/course", CourseRoutes);
// Class Room routes
routes.use("/classRoom", ClassRoomRoutes);
// User routes
routes.use("/user", UserRoutes);
// ADMIN routes
routes.use("/admin", AdminRoutes);

export default routes;
