import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getAuthSession();

  const formatDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

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

    const allItems = await db.item.findMany({
      where: {
        creatorId: session?.user.id,
      },
    });

    const assetSum = asset.reduce((acc, b) => acc + parseInt(b.value), 0);
    const liabilitySum = liabilities.reduce(
      (acc, b) => acc + parseInt(b.value),
      0
    );
    const networthValue = (assetSum - liabilitySum).toString();

    const test = allItems.map((item) => {
      const date = new Date(item.createdAt);
      // @ts-ignore
      item.createdAt = formatDate.format(date);
      return {
        item,
        networth: networthValue,
      };
    });

    return new Response(JSON.stringify(test));
  } catch (error) {
    return new Response("Could not fetch networth", { status: 500 });
  }
}
