const todos = [
  { id: 1, title: "todo one", completed: false },
  { id: 2, title: "todo two", completed: false },
  { id: 3, title: "todo three", completed: true },
];
export default function TodoList() {
  return (
    <div className="">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

function Todo({ id, title, completed }) {
  return (
    <div className="flex justify-around border-2 mb-2 rounded-md py-4 px-2 md:max-w-2xl mx-auto">
      <div>
        <input className="mx-4" type="checkbox" name="" id="" checked={completed} />
        <span className="text-slate-100">{title}</span>
      </div>
      <button className="bg-rose-400 text-slate-100 py-1 px-2 rounded-md">Delete</button>
    </div>
  );
}
