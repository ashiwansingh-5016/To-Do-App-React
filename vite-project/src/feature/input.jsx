
import {useState} from "react"
function Input (){

    const [input , setInput] = useState("")
    const [description , setDescription] = useState("")
    const [object , setObject] = useState([])
    const [wantedit , setEdit] = useState(null)


    const addItem = () =>{
        if (input.trim()==="" || description==="") return;

        setEdit(null)
        setObject([...object , {title : input , work : description}])
        setInput("")
        setDescription("")
    }
    


    const edit = (index) => {
        setEdit(index);
        setInput(object[index].title)
        setDescription(object[index].work)
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
                {object.map((e , index)=>
                <>
                <div key={index}>{e.title}-{e.work}
                <button onClick={()=>edit(index)}>Edit</button>
                </div>
                </>)}
            </div>
        </div>
    )

}
export default Input