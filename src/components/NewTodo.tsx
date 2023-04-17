import { useContext, useRef } from "react";
import { TodosContext } from "./store/todos-context";


// no need now that we use context API
// type NewTodoProps = {
//     onAddTodo: (enteredText: string) => void
// }

const NewTodo: React.FC = () => {
    const {addTodo} = useContext(TodosContext)

    const newTodoRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredText =  newTodoRef.current!.value; // we can use ? instead of ? when we are sure that a current object exists when this code gets executed


        if (enteredText.trim().length === 0) {
            // throw error
            return;
        }

        addTodo(enteredText);

        // clear fields
        newTodoRef.current!.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={newTodoRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo