// import './App.css'

import AddTodo from "./components/AddTodoForm";
import Header from "./components/Header";
import Status from "./components/Status";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="bg-slate-500 h-screen w-screen p-2">
      <div className="container lg:max-w-4xl">
        <Header />
        <AddTodo/>
        <Status />
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
