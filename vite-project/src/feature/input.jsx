
import {useState} from "react"
function Input (){

    const [input , setInput] = useState("")
    const [description , setDescription] = useState("")
    const [object , setObject] = useState([])
    

    const addItem = () =>{
        if (input.trim()==="" || description==="") return;
        setObject([...object , {title : input , work : description}])
        setInput("")
        setDescription("")
    }

    return (
        <div>
            <div>
                <h1>Adding Things</h1>
                <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
                <input value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                <button onClick={addItem}>Addd</button>

            </div>
            <div>
                <h1>Working On</h1>
                {object.map((e , index)=> <div key={index}> {e.title} - {e.work} </div>)}
            </div>
        </div>
    )

}
export default Input