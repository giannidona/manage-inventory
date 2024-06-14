import { Item as PrismaItem } from "@prisma/client";

export type Item = PrismaItem;

export interface CreateItemInput {
  itemName: string;
  itemImage: string;
  stock: number;
  price: number;
}
