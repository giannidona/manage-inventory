"use client";

import { createItem } from "@/actions/createItem";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateItemPage() {
  const router = useRouter();

  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const stockNumber = Number(stock);
    const priceNumber = Number(price);

    const result = await createItem({
      itemName,
      itemImage,
      stock: stockNumber,
      price: priceNumber,
    });

    if (result.success) {
      router.push("/");
    } else {
      console.log("Error updating item: " + result.error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Link
        className="flex transition-all ease-in-out hover:text-white/50"
        href="/"
      >
        <ChevronLeft className="w-4" />
        Back to list
      </Link>

      <h1 className="mb-12 text-4xl font-bold">Create Item</h1>
      <form className="text-white" onSubmit={onSubmit}>
        <div className="mb-2">
          <div>
            <label htmlFor="name">Item Name</label>
          </div>
          <input
            className="rounded px-2 py-1 text-black"
            type="text"
            id="name"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
        </div>
        <div className="mb-2">
          <div>
            <label htmlFor="image">Item Image</label>
          </div>
          <input
            className="rounded px-2 py-1 text-black"
            type="text"
            id="image"
            onChange={(e) => setItemImage(e.target.value)}
            value={itemImage}
          />
        </div>
        <div className="mb-2">
          <div>
            <label htmlFor="stock">Stock</label>
          </div>
          <input
            className="rounded px-2 py-1 text-black"
            type="number"
            id="stock"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
          />
        </div>
        <div className="mb-5">
          <div>
            <label htmlFor="price">Price</label>
          </div>
          <input
            className="rounded px-2 py-1 text-black"
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <button
          className="w-full rounded border border-black bg-white px-3 py-1 font-bold text-black transition-all duration-300 ease-in-out hover:border-white hover:bg-black hover:text-white"
          type="submit"
        >
          Create Item
        </button>
      </form>
    </div>
  );
}
