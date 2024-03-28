import { Todo } from "@/model/todo";

type Props = {
  item: Todo;
  index: number;
  handleDelete: (id: number) => void;
};

export default function TotoCard({ item, index, handleDelete }: Props) {
  return (
    <li className="flex bg-slate-200 rounded-md p-2 text-2xl items-center">
      <p>{index + 1}.</p>
      <p className="w-full text-start ml-2">{item.content}</p>
      <button
        className="bg-white p-2 rounded-sm"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Del
      </button>
    </li>
  );
}
