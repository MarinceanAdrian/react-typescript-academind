import TodoComponent from './TodoComponent'
import { useContext } from 'react';
import { TodosContext } from './store/todos-context';

const Todos: React.FC = (props) => {
    const { items } = useContext(TodosContext)
    return (
        <ul>
            {items.map(item => <TodoComponent key={item.id} {...item} />)}
            {items.length === 0 && <p>No todos!</p>}
        </ul>
    )
}

export default Todos;