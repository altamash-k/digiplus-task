import React, {useState, useEffect} from 'react'
import "./List.css"
import { IconButton } from '@mui/material'
import { Visibility, Edit, DeleteForever } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import axios from 'axios'

const List = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsersData()
        {
            try{
                const users = await axios.get("http://localhost:3333/users/");
                // console.log(users.data);
                setUsers(users.data);
            } catch(error) {
                console.log("Something Went Wrong");
            }
        }
        getUsersData()
    }, [])

    const handleDelete = async id => {
        axios.delete(`http://localhost:3333/users/${id}`);
    }

    
  return (
    <>
        <table id="customers">
        <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        
        {
            users.map((user, i) => {
                return (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{user.username}</td>
                        <td><IconButton><Link to={`/view/${user.id}`}><Visibility color="primary" /></Link></IconButton></td>
                        <td><IconButton><Link to={`/edit/${user.id}`}><Edit /></Link></IconButton></td>
                        <td><IconButton onClick={() => handleDelete(user.id)}><DeleteForever color="secondary" /></IconButton></td>
                    </tr>
                )
            })
        }
        </table>
    </>
  )
}

export default List
