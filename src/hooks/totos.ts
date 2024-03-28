import { Todo } from "@/model/todo";
import { useQuery } from "@tanstack/react-query";

export function useTodos() {
  const { data, refetch } = useQuery<Todo[]>({ queryKey: ["todos"], queryFn: getTodos });

  const addHandler = async (test: string) => {
    refetch({});
    return addTodo(test).then(() => refetch());
  };

  const deleteHandler = async (id: number) => {
    return deleteTodo(id).then(() => refetch());
  };

  return { data, addHandler, deleteHandler };
}

async function getTodos() {
  return fetch("/api/todo").then((res) => res.json());
}

async function addTodo(content: string) {
  return fetch("/api/todo", {
    method: "POST",
    body: JSON.stringify({
      content,
    }),
  });
}

async function deleteTodo(id: number) {
  return fetch("/api/todo", {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
  });
}
