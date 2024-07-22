import { useState,useContext, useEffect} from 'react'
import { cross } from "../utils/icons"
import { TodoContext } from '../utils/contextAPI';

const ListOfTodos = ( { todo, index } ) => {
     const todos = useContext(TodoContext);
     const[removeTodo, setRemoveTodo] = useState(todos);
       
    

      
    return (
        <div className="flex justify-between w-96 bg-[#f0f0f0] text-center mx-auto my-3 px-3 h-10 items-center text-xl rounded-md">
            <div >
               {todo.todo}
            </div>
            <div>
               <span className="cursor-pointer">{cross} </span>
            </div>
        </div>
    )
}

export default ListOfTodos