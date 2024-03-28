"use client";

import { useState } from "react";
import TotoCard from "./TotoCard";
import { Todo } from "@/model/todo";
import { addTodo } from "@/service/todo";
import { useTodos } from "@/hooks/totos";

type Props = {};

export default function TotoList({}: Props) {
  const { data: items, addHandler, deleteHandler } = useTodos();
  const [text, setText] = useState<string>("");

  const handleSubmit = () => {
    if (text === "") return;
    addHandler(text);
    setText("");
  };

  const handleDelete = (id: number) => {
    deleteHandler(id);
  };

  return (
    <section className="flex flex-col h-full max-w-[700px] w-full mx-auto py-10">
      <div className="p-2">
        <h1 className="text-2xl font-semibold">Simple Toto List</h1>
      </div>
      <ul className="flex flex-col grow overflow-scroll gap-2">
        {items &&
          items.map((item, index) => (
            <TotoCard
              item={item}
              index={index}
              key={item.id}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      <form
        action=""
        className="flex w-full bg-slate-100 p-2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          className="w-full text-2xl outline-none bg-transparent"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="font-bold" type="submit">
          Add
        </button>
      </form>
    </section>
  );
}
