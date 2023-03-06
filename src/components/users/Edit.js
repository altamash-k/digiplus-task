import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        status: "",
    });
    useEffect(() => {
        async function getUser() {
            try {
                const user = await axios.get(`http://localhost:3333/users/${id}`)
                // console.log(user.data);
                setUser(user.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getUser();
    }, [id]);
    
    function onTextFieldChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3333/users/${id}`, user)
            navigate('/');
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
  return (
    <>
        <div className="main-block">
        <form>
            <h1>Update Form</h1>
            <div className="info">
                <input className="fname"  type="text" value={user.username} onChange={e => onTextFieldChange(e)} autoComplete='username' id='username' name="username" placeholder="Full name" required/>
                <input type="text" value={user.email} onChange={e => onTextFieldChange(e)} name="email" placeholder="Email" autoComplete='email' id='email' required/>
                <input type="text" value={user.status} onChange={e => onTextFieldChange(e)} name="status" placeholder="status number" autoComplete='email' id='email' required/>
                {/* <input type="text" name="name" placeholder="Website" /> */}
            </div>
            <button type="submit" onClick={e => onFormSubmit(e)}>Update</button>
        </form>
        </div>
    </>
  )
}

export default Edit