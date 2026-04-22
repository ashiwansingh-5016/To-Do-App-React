import { useState } from "react"


function Body(){
    const [input , setInput]=useState("") ;
    const [disc_input , setDisc_input]=useState("") ; 
    const [object , setObject]=useState([]) ;
    const [recent, setRecent] = useState([]);
    const [Completed, setComplete] = useState([]);





    const addValue = ()=>{
        setObject([...object , {title:input , Discription : disc_input}])
        setInput("")
        setDisc_input("")

    };
    const Delete = (index) => {
        const DeletedItem = object[index]
        setRecent([...recent , DeletedItem])
        setObject(object.filter((_, i) => i!==index));
    };
    const Complete = (index)=>{
        setComplete([...Completed , object[index]])
        setObject(object.filter((_, i) => i !== index));
         
    }

    return (
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <input value={disc_input} onChange={(e)=>setDisc_input(e.target.value)}></input>
            <button onClick={addValue}>Add Work</button>
            
            <div>
            {object.map((e , index)=><div key={index}>{e.title}-{e.Discription}<button onClick={()=>Delete(index)}>Delete</button><input type="checkbox" onChange={()=>Complete(index)}></input></div>)}
            <h3>Recently Deleted</h3>
            {recent.map((e, index) => (<div key={index}>{e.title} - {e.Discription}</div>))}
            <h3>Completed</h3>
            {Completed.map((e, index) => (<div key={index}>{e.title} - {e.Discription}</div>))}
            <h3>Working</h3>
            {object.map((e, index) => (<div key={index}>{e.title} - {e.Discription}</div>))}
            </div>
        </div>
    )
}
export default Body