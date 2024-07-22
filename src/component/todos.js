import { useContext } from 'react'
import { TodoContext } from "../utils/contextAPI"
import ListOfTodos from './listOfTodos'

const Todos = () => {
      const todos = useContext(TodoContext)
    return (
        <>
          { todos.map((e,i) => <ListOfTodos todo={e} index={i} key={i} />) }
        </>
    )
}

export default Todos