import { useContext, createContext } from "react";

export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "todomsg",
            completed: false
        }
    ],
    addTodos: (todo) => { },
    updateTodos: (id, todo) => { },
    deleteTodos: (id) => { },
    toggleCompletes: (id) => { },
})

export const useTodos = () => {
    return useContext(TodoContext)
}
export const TodoProviders = TodoContext.Provider;
