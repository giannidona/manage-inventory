import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-12 text-4xl font-bold">Manage Your Inventory</h1>

      <div className="mb-12">
        <input
          className="rounded px-3 py-1"
          type="text"
          placeholder="search item..."
        />
      </div>

      <div className="mb-12">
        <div className="flex h-[65px] w-[750px] items-center justify-between rounded bg-white p-2 text-black">
          <div>
            <Image
              className="rounded-full"
              src={"/logodev.png"}
              alt=""
              height={50}
              width={50}
            />
          </div>
          <div className="flex gap-x-14">
            <p>price: 150</p>
            <p>stock: 150</p>
            <p>description</p>
            <p>fecha</p>
          </div>
          <div className="flex gap-x-2 text-white">
            <span className="cursor-pointer rounded bg-blue-500 p-2 transition-all ease-in-out hover:bg-blue-800">
              <Eye />
            </span>
            <span className="cursor-pointer rounded bg-blue-500 p-2 transition-all ease-in-out hover:bg-blue-800">
              <Pencil />
            </span>
            <span className="cursor-pointer rounded bg-red-500 p-2 transition-all ease-in-out hover:bg-red-800">
              <Trash2 />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
