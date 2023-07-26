import { type Prisma } from "@acme/db";

import { type PrismaCtx } from "../type/common/prisma";

export const create = async (prisma: PrismaCtx) =>
  prisma.example.create({
    data: {},
  });

export const find = async (prisma: PrismaCtx) =>
  prisma.example.findFirst({
    where: {},
  });

export const all = async (prisma: PrismaCtx) =>
  prisma.example.findMany({
    where: {},
    orderBy: { createdAt: "desc" },
  });
