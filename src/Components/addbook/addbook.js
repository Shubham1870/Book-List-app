import Header from "../header/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addbook = () => {
  const [formvalue, setformvalue] = useState({
    title: "",
    ISBN: "",
    author: "",
    publishdate: "",
    publisher: "",
    user: localStorage.getItem("id"),
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formvalue),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/homepage")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <form onSubmit={handlesubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" onChange={handlechange} />
        <br />
        <label htmlFor="ISBN">ISBN</label>
        <br />
        <input type="number" name="ISBN" onChange={handlechange} />
        <br />
        <label htmlFor="author">Author</label>
        <br />
        <input type="text" name="author" onChange={handlechange} />
        <br />
        <label htmlFor="publishdate">Publish Date</label>
        <br />
        <input type="text" name="publishdate" onChange={handlechange} />
        <br />
        <label htmlFor="publisher">Publisher</label>
        <br />
        <input type="text" name="publisher" onChange={handlechange} />
        <br />
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </>
  );
};

export default Addbook;