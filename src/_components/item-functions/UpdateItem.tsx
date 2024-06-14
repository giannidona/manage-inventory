import { Pencil } from "lucide-react";
import Link from "next/link";

interface Props {
  id: string;
}

export const UpdateItem = ({ id }: Props) => {
  return (
    <Link
      href={`/update-info/${id}`}
      className="cursor-pointer rounded bg-blue-500 p-2 transition-all ease-in-out hover:bg-blue-800"
    >
      <Pencil />
    </Link>
  );
};
