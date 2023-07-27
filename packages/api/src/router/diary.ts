import { z } from "zod";

import { zodTypes } from "@acme/db";

import { all, create, findById } from "../service/diary";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const diaryRouter = createTRPCRouter({
  findById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) =>
      findById(ctx.prisma, ctx.session.user.id, input.id),
    ),
  all: protectedProcedure.query(({ ctx }) =>
    all(ctx.prisma, ctx.session.user.id),
  ),
  create: protectedProcedure
    .input(zodTypes.DiaryCreateWithoutUserInputSchema)
    .mutation(({ ctx, input }) =>
      create(ctx.prisma, ctx.session.user.id, input),
    ),
});
