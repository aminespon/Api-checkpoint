import React from 'react'
import { Card,Button } from 'react-bootstrap'

function User({user}) {
    return (
        <div className='user'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      phone : {user.phone}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default User
