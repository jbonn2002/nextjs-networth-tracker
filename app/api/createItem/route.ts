import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { formSchema } from "@/lib/validators/formSchema";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    const body = await req.json();

    const { description, name, type, value } = formSchema.parse(body);

    const asset = await db.item.findMany({
      where: {
        creatorId: session?.user.id,
        type: "asset",
      },
      select: {
        value: true,
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

    // @ts-ignore
    const assetSum = asset.reduce((acc, b) => acc + parseInt(b.value), 0);
    const liabilitySum = liabilities.reduce(
      (acc, b) => acc + parseInt(b.value),
      0
    );
    const networthValue = (assetSum - liabilitySum).toString();

    const count = await db.item.count();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (count > 0) {
      console.log("jimmy");

      await db.item.create({
        data: {
          name,
          description,
          type,
          value,
          networth: networthValue,
          creatorId: session.user.id,
        },
      });

      return new Response("Created item");
    } else {
      await db.item.create({
        data: {
          name,
          description,
          type,
          value,
          networth: value,
          creatorId: session.user.id,
        },
      });

      return new Response("Created first item");
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }

    const body = await req.json();

    const { type } = formSchema.parse(body);

    return new Response(
      `Could not create ${type} at this time, please try again later`,
      { status: 500 }
    );
  }
}
