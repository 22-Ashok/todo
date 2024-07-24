import { useState } from 'react'
import { plusIcon } from '../utils/icons'


const Search = ( {setTodosFunc} ) => {
     const[search,setSearch] = useState('');

     function addTodo() {
        if(search.length == 0) {
            return alert("enter todo")
        }
        setTodosFunc(search);
        return setSearch('')
     }

    return (
        <div>
            <input type="text" placeholder="enter todo" value={search} onChange={(e) => setSearch(e.target.value)} className="border border-black border-solid w-60 pl-1"></input>
            <button onClick={addTodo} className="relative -left-5"> { plusIcon } </button>
        </div>
    )
}

export default Search