import React from "react"
import "../Signin/signin.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Signin = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const [err, seterr] = useState("")

  const handlechange = (e) => {
    const { name, value } = e.target
    setdata({ ...data, [name]: value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    const data1=await fetch(`https://book-backend2.onrender.com/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data1) => {
        return res.data1()
      })
      .then((response) => {
        if (response.message === "Wrong password") {
          seterr(response.message)
          return
        }
        seterr(response.message)
        if (response.message === "Login Succesfull") {
          navigate("/homepage")
        }

        localStorage.setItem("token", data.token)
        localStorage.setItem("id", data.id)
        console.log(data, "data")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div id="main-container">
        <div id="inside-container">
          <h1>Member Login</h1>
          <form onSubmit={handlesubmit}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              id="first-input"
              required
              onChange={(e) => {
                handlechange(e)
              }}
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                handlechange(e)
              }}
            />
            <br />
            <button type="submit">Submit</button>
            <br />
            <button>
              <Link to="/signup">SignUp</Link>
            </button>
            <div>{err}</div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
