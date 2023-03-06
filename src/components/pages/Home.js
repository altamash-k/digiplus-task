import React from 'react'
import "./Home.css"
import List from '../users/List'
import axios from 'axios'
import { useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState({
    username: "",
    email: "",
    status: "",
  });

  const [statusPage, setStatus] = useState()

  if(statusPage)
    return <Home />

  function onChangeHandle(e){
    setUsers({
      ...users,
      [e.target.name] : e.target.value
    })
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/users/`, users);
      setStatus(true);
    } catch(error) {
      console.log("Something went wrong");
    }
  }
  return (
    <>
        <div className="main-block">
        <div className="left-part">
            <List />
        </div>
        <form>
            <h1>Users Info Form</h1>
            <div className="info">
                <input onChange={e => onChangeHandle(e)} className="fname" type="text" autoComplete='username' id='username' name="username" placeholder="Full name" required/>
                <input onChange={e => onChangeHandle(e)} type="text" name="email" placeholder="Email" autoComplete='email' id='email' required/>
                <input onChange={e => onChangeHandle(e)} type="text" name="status" placeholder="status" autoComplete='email' id='email' required/>
            </div>
            <button type="submit" onClick={e => onFormSubmit(e)}>Submit</button>
        </form>
        </div>
    </>
  )
}

export default Home
