import { Arg, ArgsType, Field, FieldResolver, Float, ID, InputType, Int, ObjectType, registerEnumType } from "type-graphql";
import { Args, Context, Mutation, Query, ResolveProperty, Resolver, Root } from "@nestjs/graphql";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeFilter {
  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  equals?: Date | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  not?: Date | null;

  @Field(_type => [Date], {
    nullable: true,
    description: undefined
  })
  in?: Date[] | null;

  @Field(_type => [Date], {
    nullable: true,
    description: undefined
  })
  notIn?: Date[] | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  lt?: Date | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  lte?: Date | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  gt?: Date | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  gte?: Date | null;
}