import { diaryRouter } from "./router/diary";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  diary: diaryRouter,
});

export type AppRouter = typeof appRouter;
