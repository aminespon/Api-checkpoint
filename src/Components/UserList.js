import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
        setUsers(res.data);
        setLoading(false);
        })
        .catch((err)=>setError(true));
    }, [])
    return (
        <div className='userList'>
            {users.map( user => <User user={user} />)}
        </div>
    )
}

export default UserList
