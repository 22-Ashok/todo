import React from "react";
import ReactDOM from 'react-dom/client'

const App = () => {

    return (
        <div>
            <h1 className="text-blue-600 text-lg">hello world</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)