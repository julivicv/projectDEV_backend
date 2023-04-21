import jwt from "jsonwebtoken";

export class JWT {
  static async create(payload: any, secret: string, expiresIn: string) {
    return await jwt.sign(payload, secret, { expiresIn });
  }
  static async verify(token: string, secret: string) {
    return await jwt.verify(token, secret);
  }
}
