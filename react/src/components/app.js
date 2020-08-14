import React, {useState} from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)

function App() {
    const[loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
    }
    return(
        <div>
            Que lindo es React
            <ul>
                {
                    loaderList.map(item => <Loader {...item} key={item.id}/>) 
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido en Webpack </button>
        </div>
    )    
}

export default App