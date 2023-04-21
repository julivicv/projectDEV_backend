import express from "express";
import cors from "cors";
import routes from "./routes";

export default class Server {
  private app = express();

  public start(PORT: number): void {
    this.middleware();
    this.routes();

    this.app.listen(PORT, () => {
      console.log(`
        [SERVER] Running at http://localhost:${PORT}/api/v1
      `);
    });
  }
  public middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public/uploads"));
    this.app.use(cors());
  }
  public routes() {
    this.app.use("/api/v1", routes);
  }
}
