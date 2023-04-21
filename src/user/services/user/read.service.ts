import { ResponseServer } from "../../response";
import UserRepos from "../../user.repos";

export default class ReadUserService {
  constructor(private readonly repos: UserRepos) {}

  async all(): Promise<ResponseServer<any>> {
    const users = await this.repos.findAll();

    return {
      statusCode: 200,
      body: users,
    };
  }

  async uniquie(id: string): Promise<ResponseServer<any>> {
    const user = await this.repos.findById(id);

    if (!user) {
      return {
        statusCode: 404,
        body: {
          message: "User not found",
        },
      };
    }

    return {
      statusCode: 200,
      body: user,
    };
  }
}
