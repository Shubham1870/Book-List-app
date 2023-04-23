import Header from "../header/header"

const Addbook=()=>{
    const [formvalue,setformvalue]=useState({
        title:"",
        ISBN:"",
        author:"",
        publishdate:"",
        publisher:"",
        user:localStorage.getItem("id")

    })
    const navigate=useNavigate()

    const handlechange=(e)=>{
        const {title,
        ISBN,
        author,
        publishdate,
        publisher}=e.target
        setformvalue({ ...formvalue,[name]:value})
    }
    const handlesubmit=async(e)={
        e.preventDefault();
       await fetch("http://localhost:8000/book",{
            method:"POST",
            headers:{
                Accept:"application/json"
                "Context-Type":"application/json"
            },
            body:JSON.stringify(formvalue)
        }).then(res=>{
            return res.json()
        }).then((data)=>{
console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <>
<Header/>
<form onSubmit={handlesubmit}>
    <label htmlFor="title">Title</label>
    <br/>
    <input type="text" name="title" onChange={(e)=>{handlesubmit(e)}} />
    <br/>
    <label htmlFor="ISBN">ISBN</label>
    <br/>
    <input type="number" name="ISBN" onChange={(e)=>{handlesubmit(e)}} />
    <br/>
    <label htmlFor="author">author</label>
    <br/>
    <input type="text" name="author" onChange={(e)=>{handlesubmit(e)}} />
    <br/>
    <label htmlFor="publishdate">publishdate</label>
    <br/>
    <input type="text" name="publishdate" onChange={(e)=>{handlesubmit(e)}} />
    <br/>
    <label htmlFor="publisher">publisher</label>
    <br/>
    <input type="text" name="publisher" onChange={(e)=>{handlesubmit(e)}} />
    <br/>
    <div>
        <button type="submit">Add Book</button>
    </div>
</form>
        </>
    )
}
export default Addbook