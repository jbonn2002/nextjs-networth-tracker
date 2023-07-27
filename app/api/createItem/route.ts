import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { formSchema } from "@/lib/validators/formSchema";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { description, name, type, value } = formSchema.parse(body);

    await db.item.create({
      data: {
        name,
        description,
        type,
        value,
        creatorId: session.user.id,
      },
    });

    return new Response("Created");
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
