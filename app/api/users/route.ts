import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);

    const take = url.searchParams.get('take');
    const lastCursor = url.searchParams.get('lastCursor');

    const result = await prisma.user.findMany({
      take: Number(take) || 10,
      ...(lastCursor && {
        skip: 1,
        cursor: { id: lastCursor }
      }),
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (result.length === 0) {
      return new Response(JSON.stringify({
        data: [],
        metaData: {
          lastCursor: null,
          hasNextPage: false,
        },
      }), { status: 404 });
    }

    const lastUser = result[result.length - 1];
    const lastCursorId = lastUser.id;

    const nextPage = await prisma.user.findMany({
      take: take ? Number(take) : 10,
      skip: 1,
      cursor: { id: lastCursorId },
    });

    const data = {
      data: result,
      metaData: {
        lastCursor: lastCursorId,
        hasNextPage: nextPage.length > 0,
      },
    }

    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}