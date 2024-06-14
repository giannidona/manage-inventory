"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteItemById = async (
  id: string,
): Promise<{ success: boolean; error?: string }> => {
  try {
    await prisma.item.delete({
      where: { id: id },
    });

    revalidatePath("/");
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Error deleting item" };
  }
};
