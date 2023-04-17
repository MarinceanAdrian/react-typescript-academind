import React, { useState } from 'react';
import Todo from '../../models/todo';

// we also have to assign types to the createContext
export const TodosContext=React.createContext<{
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}>({
    // here are kind of the default values, but we need to also declare the types initially
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) =>{}
})

// types
type ContextProps = {
    children: React.ReactNode
}

const TodosContextProvider: React.FC<ContextProps> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (newTodoText: string) => {
      const newTodo = new Todo(newTodoText);
  
      setTodos(prev => {
        return prev.concat(newTodo)
      })
    }
  
    const deleteTodoHandler = (id: string | number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    return (
        <TodosContext.Provider value={{
            items: todos,
            addTodo: addTodoHandler,
            removeTodo: deleteTodoHandler
        }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider