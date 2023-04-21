import { ResponseServer } from "../../response";
import UserRepos from "../../user.repos";

export default class DeleteUserService {
  constructor(private readonly repos: UserRepos) {}

  async execute(id: string): Promise<ResponseServer<any>> {
    const user = await this.repos.findById(id);

    if (!user) {
      return {
        statusCode: 404,
        body: {
          message: "User not found",
        },
      };
    }

    await this.repos.delete(id);

    return {
      statusCode: 200,
      body: {
        message: "User deleted",
      },
    };
  }
}
