import { type PrismaCtx } from "../type/prisma";

export const create = async (
  prisma: PrismaCtx,
  userId: string,
  { content, title }: { content: string; title: string },
) =>
  prisma.diary.create({
    data: {
      content,
      title,
      userId,
    },
  });

export const findById = async (prisma: PrismaCtx, userId: string, id: string) =>
  prisma.diary.findFirst({
    where: { id, userId },
  });

export const all = async (prisma: PrismaCtx, userId: string) =>
  prisma.diary.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
