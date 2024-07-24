import ListOfTodos from './listOfTodos'

const Todos = ({ todos, removeTodo, markDone }) => {

    return (
        <>
          { todos.map((todo,i) => <ListOfTodos key={i} todo={todo} removeTodo={removeTodo} markDone={markDone} />) }
        </>
    )
}

export default Todos