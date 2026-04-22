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
    setObject(object.filter((_, i) => i!==index));
    };

    return (
        <div>
            <input onChange={(e)=>setInput(e.target.value)}></input>
            <input onChange={(e)=>setDisc_input(e.target.value)}></input>
            <button onClick={addValue}>Add Work</button>
            <button>Recently Deleted</button>
            
            
            {object.map((e , index)=>
            <div key={index}>{e.title}-{e.Discription}
            <button onClick={()=>Delete(index)}>Delete</button>
            </div>
            )}
        </div>
    )
}
export default Body