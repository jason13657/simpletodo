import { addTodo, deleteTodo, getTodos } from "@/service/todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const foods = await getTodos();

  return Response.json(foods);
}

export async function POST(req: NextRequest) {
  const { content } = await req.json();

  if (!content) {
    return new NextResponse("Bad request", { status: 400 });
  }

  return addTodo(content)
    .then((res) => NextResponse.json(res))
    .catch((e) => new NextResponse(JSON.stringify(e), { status: 400 }));
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id) {
    return new NextResponse("Bad request", { status: 400 });
  }

  return deleteTodo(id)
    .then((res) => NextResponse.json(res))
    .catch((e) => new NextResponse(JSON.stringify(e), { status: 400 }));
}
