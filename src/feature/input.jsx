import {useState} from "react"
import Delete from "./delete.jsx"









function Input (){

    const [input , setInput] = useState("")
    const [description , setDescription] = useState("")
    const [wantedit , setEdit] = useState(null)
    const [object , setObject] = useState([])

// Adding Element and Updating It 
    const addItem = () =>{
        if (input.trim()==="" || description.trim()==="")  return ;
        if (wantedit !== null) {
        const updated = [...object];
        updated[wantedit] = {
            title: input,
            work: description
        };
        setObject(updated);
        setEdit(null);
    }
        else{
        setEdit(null)
        setObject([...object , {title : input , work : description}])
        setInput("")
        setDescription("")
        }
    }
    

// Calling Edit FUnction 
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
                <button onClick={addItem}>{(wantedit !== null)? "Update" : "Add"}</button>
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
            <Delete />
        </div>
    )

}
export default Input