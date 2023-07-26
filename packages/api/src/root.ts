import { authRouter } from "./router/auth";
import { exampleRouter } from "./router/example";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
