import { Request, Response, NextFunction } from "express";
import config from "../../../config/config";
import jwt from "jsonwebtoken";

export interface TokenPayLoad {
  name: string;
  email: string;
  photoFile: string;
  isAdmin: boolean;
}
function Auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "TOKEN IS REQUIRED",
      });
    }
    jwt.verify(token, config.JWT_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Unauthorized",
        });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
}

export default Auth;
