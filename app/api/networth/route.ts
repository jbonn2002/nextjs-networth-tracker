import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getAuthSession();

  try {
    const asset = await db.item.findMany({
      where: {
        creatorId: session?.user.id,
        type: "asset",
      },
      select: {
        value: true,
        createdAt: true,
      },
    });

    const liabilities = await db.item.findMany({
      where: {
        creatorId: session?.user.id,
        NOT: {
          type: "asset",
        },
      },
      select: {
        value: true,
      },
    });

    const assetSum = asset.reduce((acc, b) => acc + parseInt(b.value), 0);
    const liabilitySum = liabilities.reduce(
      (acc, b) => acc + parseInt(b.value),
      0
    );
    const networth = (assetSum - liabilitySum).toString();

    const test = asset.map((item) => {
      return {
        ...item,
        networth,
      };
    });

    return new Response(JSON.stringify(test));
  } catch (error) {
    return new Response("Could not fetch networth", { status: 500 });
  }
}
