import type { Prisma } from "@prisma/client";
import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(["Serializable"]);

export const ExampleScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EXAMPLE SCHEMA
/////////////////////////////////////////

export const ExampleSchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Example = z.infer<typeof ExampleSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EXAMPLE
//------------------------------------------------------

export const ExampleSelectSchema: z.ZodType<Prisma.ExampleSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ExampleWhereInputSchema: z.ZodType<Prisma.ExampleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExampleWhereInputSchema),
        z.lazy(() => ExampleWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExampleWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExampleWhereInputSchema),
        z.lazy(() => ExampleWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const ExampleOrderByWithRelationInputSchema: z.ZodType<Prisma.ExampleOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExampleWhereUniqueInputSchema: z.ZodType<Prisma.ExampleWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid(),
    })
    .and(
      z
        .object({
          id: z.string().cuid().optional(),
          AND: z
            .union([
              z.lazy(() => ExampleWhereInputSchema),
              z.lazy(() => ExampleWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ExampleWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ExampleWhereInputSchema),
              z.lazy(() => ExampleWhereInputSchema).array(),
            ])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        })
        .strict(),
    );

export const ExampleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExampleOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ExampleCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ExampleMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ExampleMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ExampleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExampleScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ExampleScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const ExampleCreateInputSchema: z.ZodType<Prisma.ExampleCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ExampleUncheckedCreateInputSchema: z.ZodType<Prisma.ExampleUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ExampleUpdateInputSchema: z.ZodType<Prisma.ExampleUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  })
  .strict();

export const ExampleUncheckedUpdateInputSchema: z.ZodType<Prisma.ExampleUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ExampleUpdateManyMutationInputSchema: z.ZodType<Prisma.ExampleUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ExampleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ExampleUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    lte: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    gt: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    gte: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    contains: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    startsWith: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    endsWith: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
      .optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
      .optional(),
    lte: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
      .optional(),
    gt: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
      .optional(),
    gte: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
      .optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const ExampleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExampleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExampleMinOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      contains: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      startsWith: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      endsWith: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    lte: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    gt: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    gte: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    contains: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    startsWith: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    endsWith: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      contains: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      startsWith: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      endsWith: z
        .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z
      .union([z.number(), z.lazy(() => IntFieldRefInputSchema)])
      .optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    lte: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    gt: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    gte: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ExampleFindFirstArgsSchema: z.ZodType<Prisma.ExampleFindFirstArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ExampleScalarFieldEnumSchema,
          ExampleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ExampleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExampleFindFirstOrThrowArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ExampleScalarFieldEnumSchema,
          ExampleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ExampleFindManyArgsSchema: z.ZodType<Prisma.ExampleFindManyArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ExampleScalarFieldEnumSchema,
          ExampleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ExampleAggregateArgsSchema: z.ZodType<Prisma.ExampleAggregateArgs> =
  z
    .object({
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ExampleGroupByArgsSchema: z.ZodType<Prisma.ExampleGroupByArgs> = z
  .object({
    where: ExampleWhereInputSchema.optional(),
    orderBy: z
      .union([
        ExampleOrderByWithAggregationInputSchema.array(),
        ExampleOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ExampleScalarFieldEnumSchema.array(),
    having: ExampleScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ExampleFindUniqueArgsSchema: z.ZodType<Prisma.ExampleFindUniqueArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereUniqueInputSchema,
    })
    .strict();

export const ExampleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ExampleFindUniqueOrThrowArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereUniqueInputSchema,
    })
    .strict();

export const ExampleCreateArgsSchema: z.ZodType<Prisma.ExampleCreateArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    data: z.union([
      ExampleCreateInputSchema,
      ExampleUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ExampleUpsertArgsSchema: z.ZodType<Prisma.ExampleUpsertArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    where: ExampleWhereUniqueInputSchema,
    create: z.union([
      ExampleCreateInputSchema,
      ExampleUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ExampleUpdateInputSchema,
      ExampleUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ExampleDeleteArgsSchema: z.ZodType<Prisma.ExampleDeleteArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    where: ExampleWhereUniqueInputSchema,
  })
  .strict();

export const ExampleUpdateArgsSchema: z.ZodType<Prisma.ExampleUpdateArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    data: z.union([
      ExampleUpdateInputSchema,
      ExampleUncheckedUpdateInputSchema,
    ]),
    where: ExampleWhereUniqueInputSchema,
  })
  .strict();

export const ExampleUpdateManyArgsSchema: z.ZodType<Prisma.ExampleUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ExampleUpdateManyMutationInputSchema,
        ExampleUncheckedUpdateManyInputSchema,
      ]),
      where: ExampleWhereInputSchema.optional(),
    })
    .strict();

export const ExampleDeleteManyArgsSchema: z.ZodType<Prisma.ExampleDeleteManyArgs> =
  z
    .object({
      where: ExampleWhereInputSchema.optional(),
    })
    .strict();
