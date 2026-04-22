import { useState } from "react"


function Body(){
    const [input , setInput]=useState("") ;
    const [disc_input , setDisc_input]=useState("") ; 
    const [object , setObject]=useState([]) ;
    const [recent, setRecent] = useState([]);
    
    const addValue = ()=>{
        setObject([...object , {title:input , Discription : disc_input}])
    };


    const Delete = (index) => {
        const DeletedItem = object[index]
        setRecent([...recent , DeletedItem])
    setObject(object.filter((_, i) => i!==index));
    };
    const Recent = (index) =>{
       { recent.map((e , index)=> e[index] )}
    }
    return (
        <div>
            <input onChange={(e)=>setInput(e.target.value)}></input>
            <input onChange={(e)=>setDisc_input(e.target.value)}></input>
            <button onClick={addValue}>Add Work</button>
            <button onClick={(index)=>Recent(index)}> Recently Deleted</button>
            
            
            {object.map((e , index)=>
            <div key={index}>{e.title}-{e.Discription}
            <button onClick={()=>Delete(index)}>Delete</button>
            </div>
            )}

            <h3>Recently Deleted</h3>
            {recent.map((e, index) => (
                <div key={index}>
                {e.title} - {e.Discription}
                </div>
            ))}
        </div>
    )
}
export default Body