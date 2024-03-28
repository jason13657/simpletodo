import { prisma } from "./prisma";

export async function getTodos() {
  return prisma.todos.findMany();
}

export async function addTodo(content: string) {
  return prisma.todos
    .create({
      data: {
        content,
      },
    })
    .catch(console.log);
}

export async function deleteTodo(id: number) {
  return prisma.todos.delete({ where: { id } });
}
