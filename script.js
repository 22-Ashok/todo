import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import Search from './src/component/search'
import { TodoContext } from "./src/utils/contextAPI";
import Todos from './src/component/todos'


const App = () => {
    const[todos,setTodos] = useState([]);

    // useEffect(()=>{
    //     console.log(todos)
    //  },[todos])

    return (
        <div className="text-center">
           <h1 className="text-3xl font-bold my-5 ">Todo App</h1> 
           <Search setTodosFunc={(search) =>  setTodos([...todos,{todo:search}])} />
            <TodoContext.Provider value={todos}>
                <Todos />
            </TodoContext.Provider>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)