"use server";

import prisma from "@/lib/prisma";
import { UpdateItemInput } from "@/types";

export const updateItem = async ({ id, ...updateData }: UpdateItemInput) => {
  const validUpdateData = Object.fromEntries(
    Object.entries(updateData).filter(([_, v]) => v !== undefined),
  );

  try {
    await prisma.item.update({
      where: { id },
      data: validUpdateData,
    });
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Error updating item" };
  }
};
