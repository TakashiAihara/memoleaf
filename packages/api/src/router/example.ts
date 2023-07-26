import { all, create, find } from "../service/example";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  find: publicProcedure.query(({ ctx }) => find(ctx.prisma)),
  all: publicProcedure.query(({ ctx }) => all(ctx.prisma)),
  create: publicProcedure.mutation(({ ctx }) => create(ctx.prisma)),
});
