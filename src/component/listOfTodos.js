import { cross,done } from "../utils/icons"

const ListOfTodos = ( { todo, removeTodo, markDone } ) => {

     function clickedBtn(){
       return removeTodo(todo.id)
     }

     function doneBtnClicked(){
       return markDone(todo.id)
     }

    return (
        <div className="flex justify-between w-96 bg-[#f0f0f0] text-center mx-auto my-3 px-3 h-10 items-center text-xl rounded-md">
            
               { todo.done ? <div className="line-through">{todo.todo}</div> : <div>{todo.todo}</div>}
            
            <div>
                <span className="cursor-pointer pr-3" onClick={doneBtnClicked}> {done} </span>
               <span className="cursor-pointer" onClick={clickedBtn}> {cross} </span>
            </div>
        </div>
    )
}

export default ListOfTodos