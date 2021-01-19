import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Card} from "react-bootstrap";

function UserList () {
    const [listOfUser,setListOfUser] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then( res => setListOfUser(res.data))
    }, [])
    return (
        <div className ='user-card'>
        {listOfUser .map(user => <Card 
            key ={user.id}
            style={{ width:'100rem'}}
            bg ={'green'}
            text ={'black'}
            >
                <Card.Header> {user.company.name}</Card.Header>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>  
                <Card.Text>{user.company.catchPhrase}</Card.Text>
                </Card.Body>
                </Card>
        )}
    </div>
    )
};
export default UserList;