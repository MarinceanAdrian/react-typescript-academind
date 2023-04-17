import { useContext } from "react"
import { TodosContext } from "./store/todos-context"


type TodoComponentProps = {
    text: string,
    id: string,
}
const TodoComponent: React.FC<TodoComponentProps> = ({ text, id }) => {
    const {removeTodo} = useContext(TodosContext)
    // we could have expected the entire Todo
    return <li onClick={removeTodo.bind(null, id)}>
        {text}
    </li>
}

export default TodoComponent