import { handleRequest } from "./routes";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): PromiseResponse {
    return handleRequest(request, env, ctx);
  }
};