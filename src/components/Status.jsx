import { useSelector } from "react-redux"

const badgeCss ="bg-slate-300 text-blue-900 rounded-xl inline-block px-2 absolute bottom-2 -right-7 ";

export default function Status() {
  const {todos} = useSelector(state=>state.todos)
  const alltodos = todos.length;
  const completedTodos = todos.filter(item=>item.completed)
  return (
    <ul className="flex justify-around text-slate-300 py-4 ">
        <li className="relative">all <span className={badgeCss}>{alltodos}</span></li>
        <li className="relative">completed <span className={badgeCss}>{completedTodos.length}</span></li>
        <li className="relative">uncompleted <span className={badgeCss}>{alltodos-completedTodos.length}</span></li>
    </ul>
  )
}
