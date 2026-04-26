import {useState} from "react"
// import Delete from "./delete.jsx"



function Input (){

    const [input , setInput] = useState("")
    const [description , setDescription] = useState("")
    const [wantedit , setEdit] = useState(null)
    const [object , setObject] = useState([])
    const [recently , setRecent] = useState([])

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
        setDescription("")
        setInput("")
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
// Delete object from arrey



    const deleted = (index) => {
        const item = object[index]
        setRecent([...recently  , item])
        const newArr = object.filter((_ , i)=> i !== index)
        setObject(newArr)
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
                <button onClick={()=> deleted(index)}>Delete</button>
                </div>
                </>)}
            </div>
            <h1>Recently Deleted</h1>
            {recently.map((e , index)=><div>
                <p key={index}>{e.title} - {e.work}</p>
            </div>)}


        </div>
    )

}
export default Input