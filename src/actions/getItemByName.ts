"use server";

import prisma from "@/lib/prisma";

export const getItemByName = async (name: string) => {
  try {
    const item = await prisma.item.findFirst({
      where: {
        itemName: name,
      },
    });

    if (!item) return null;

    return item;
  } catch (err) {
    console.log(err);
    throw new Error("item name error");
  }
};
