import React, { useState } from "react";
import ReactDOM from 'react-dom/client'
import Search from './src/component/search'
import Todos from './src/component/todos'

const App = () => {
    const[todos,setTodos] = useState([]);
    const removeTodo = (id) => {
        const newList = todos.filter((todo) => todo.id !== id)
        return setTodos(newList);
    }

    const markDone = (id) => {
        const newTodo = [...todos];
        newTodo.find((e)=>{
            if(e.id == id){
                e.done=true
            }
        })

        setTodos(newTodo);
    }

    console.log(todos)

    return (
        <div className="text-center">
           <h1 className="text-3xl font-bold my-5 ">Todo App</h1> 
           <Search setTodosFunc={(search) =>  setTodos([...todos,{ id:todos.length,todo:search,done:false }])} />
                <Todos todos={todos} removeTodo={removeTodo} markDone={markDone} />    
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)