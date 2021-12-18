import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserProfil from './UserProfil'

const UserList = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{return setUser(res.data)})
    })
    return (
        <div className='flexB'>
         {user.map((el)=><UserProfil el={el} />)}   
        </div>
    )
}

export default UserList
