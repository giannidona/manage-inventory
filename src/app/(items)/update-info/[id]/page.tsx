"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { updateItem } from "@/actions/updateItem";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function UpdateItemPage() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [stock, setStock] = useState<number | undefined>(undefined);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoaded(true);
    }
  }, [id]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || typeof id !== "string") return;

    const result = await updateItem({
      id,
      itemName,
      itemImage,
      stock,
      price,
    });

    if (result.success) {
      router.push("/");
    } else {
      console.log("Error updating item: " + result.error);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Link
        className="flex transition-all ease-in-out hover:text-white/50"
        href="/"
      >
        <ChevronLeft className="w-4" />
        Back to list
      </Link>
      <h1 className="mb-12 text-4xl font-bold">Update Item</h1>
      <form onSubmit={onSubmit}>
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
            onChange={(e) => setStock(Number(e.target.value))}
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
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
          />
        </div>
        <button
          className="w-full rounded border border-black bg-white px-3 py-1 font-bold text-black transition-all duration-300 ease-in-out hover:border-white hover:bg-black hover:text-white"
          type="submit"
        >
          Update Item
        </button>
      </form>
    </div>
  );
}
