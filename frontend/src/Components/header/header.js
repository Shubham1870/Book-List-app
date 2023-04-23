import { useNavigate } from "react-router-dom"
const Header=()=>{
    const navigate=useNavigate()
    const handlelogout=()=>{
        localStorage.setItem("token","")
        navigate("/")
    }
    return (
        <>
<nav>
    <ul className="navul">
        <Link to="/homepage"><li>Home</li></Link>
        <Link to="/addbook"><li>Home</li></Link>
        <li><button className="logout-button" onClick={handlelogout}>Logout</button></li>
    </ul>
</nav>
        </>
    )
}
export default Header