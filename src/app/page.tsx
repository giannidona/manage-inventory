import prisma from "@/lib/prisma";
import { ItemGrid } from "./_components/ItemGrid";
import { TitlesTable } from "./_components/TitlesTable";

export default async function Home() {
  const items = await prisma.item.findMany();

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

      <TitlesTable />
      <ItemGrid items={items} />
    </main>
  );
}
