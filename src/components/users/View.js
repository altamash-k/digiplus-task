import React from 'react'
import "./View.css"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const View = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        async function getUsers()
        {
            try{
                const user = await axios.get(`http://localhost:3333/users/${id}`);
                setUser(user.data);
            } catch(error) {
                console.log("Something Went Wrong");
            }
        }
        getUsers()
    })

    
  return (
    <>
        
        <div class="card">
            <p>Name: <strong>{user.username}</strong></p>
            <p>Email: <strong>{user.email}</strong></p>
            <p>Status: <strong>{user.status}</strong></p>
            <button style={{color: "black"}}><Link to={'/'}>Back to Home</Link></button>
        </div>
    </>
  )
}

export default View
