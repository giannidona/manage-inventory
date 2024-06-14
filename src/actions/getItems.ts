"use server";

import prisma from "@/lib/prisma";

export const getItems = async () => {
  try {
    const items = await prisma.item.findMany();
    return items;
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching all items");
  }
};
