import Header from "../header/header"
import { useEffect, useState } from "react"
const Homepage=()=>{
    const [newlist,setnewlist]=useState([])
    const handleDelete=(id)=>{
        fetch(`http://localhost:8000/book/${id}`,{
            method:"DELETE",
            headers:{
                "Context-Type":"application/json"
            },
        }).then(res=>{
            return res.json()
        }).then((data)=>{
console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetch(`http://localhost:8000/book`,{
            method:"GET",
            headers:{
                "Context-Type":"application/json"
            },
        }).then(res=>{
            return res.json()
        }).then((data)=>{
setnewlist(data.notes.filter(val=>val.title.includes(searchVal)))
        }).catch(err=>{
            console.log(err)
        })
    },newlist)
    
    return (
        <>
<Header/>
<div className="main-container">
  <div>
    {newlist.map((ele,i)=>{
        return (
            <>
                <div className="booklist" key={`${i}`}>
                    <div className="time">{ele.createdtime}</div>
                    <div style={{display:"flex",justifyContent:"end",cursor:"pointer"}}>
                        <div style={{marginRight:"1.5rem",cursor:"pointer"}} onClick={()=>handleDelete(ele._id)}>D</div>
                        
                    </div>
                    <div className="title">
                        {ele.title}
                    </div>
                    <div className="content">
                       {ele.content}
                    </div>
                </div>
            </>
        )
    })}
  </div>
</div>
        </>
    )
}
export default Homepage