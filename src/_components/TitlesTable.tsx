import { Plus } from "lucide-react";
import Link from "next/link";

export const TitlesTable = () => {
  return (
    <div className="mb-2">
      <div className="flex w-[750px] items-center justify-between rounded bg-white p-2 font-bold text-black">
        <div className="flex">
          <div className="mr-12">
            <p>image</p>
          </div>
          <div className="flex gap-x-5 text-center">
            <div className="w-[100px]">
              <p>name</p>
            </div>
            <div className="w-[100px]">
              <p>price</p>
            </div>
            <div className="w-[100px]">
              <p>stock</p>
            </div>
            <div className="w-[150px]">
              <p>created at</p>
            </div>
          </div>
        </div>

        <Link
          href={"/create-item"}
          className="cursor-pointer rounded bg-green-500 p-2 text-white transition-all ease-in-out hover:bg-green-800"
        >
          <Plus />
        </Link>
      </div>
    </div>
  );
};
