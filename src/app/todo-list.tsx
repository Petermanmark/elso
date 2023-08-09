import { Todo, TodoProps } from "./todo";

export interface TodoListProps{
  data: TodoProps[];
}

export function TodoList(props: TodoListProps){
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
    {props.data.map((todo) => <Todo {...todo}/>)}
  </div>
}
