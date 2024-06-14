"use server";

import prisma from "@/lib/prisma";
import { CreateItemInput } from "@/types";

export const createItem = async ({
  itemName,
  itemImage,
  stock,
  price,
}: CreateItemInput) => {
  try {
    await prisma.item.create({
      data: {
        itemName,
        itemImage,
        stock,
        price,
      },
    });
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Error creating item" };
  }
};
