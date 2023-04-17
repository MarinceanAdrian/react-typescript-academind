

type TodosProps = {
    items: string[]
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default Todos;