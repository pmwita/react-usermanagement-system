import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const ViewUser = () => {

    //it will grab user id val from url and return it
    const { userId } = useParams();  

    const initialState = {name:"", username:"", email:"", phone:"", website:""   };
    //set a new state user to hold the data
    const [user, setUser] = useState(initialState)
    const [address, setAddress] = useState({})
    const [company, setCompany] = useState({})

    //useeffect hook to load data on onload
      useEffect(()=>{
        //calls once on page load as we have passed empty dependncy array
        fetchUser();
    }, []);


    const fetchUser = async() =>{
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        console.log(response.data);
        setUser(response.data);
        setAddress(response.data.address);
        setCompany(response.data.company);
    }
  
    
  return (
    <div className='container'>
        
    <Link to="/" className= "btn btn-outline-info  mt-2">Back</Link>
    <p className='display-2'>User Id: {user.id} </p>

    <ListGroup className="p-4 w-75">
      <ListGroup.Item>Full Name: {user.name}</ListGroup.Item>
      <ListGroup.Item>Username: {user.username}</ListGroup.Item>
      <ListGroup.Item>Email: {user.email}</ListGroup.Item>
      <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
      <ListGroup.Item>Website: {user.website}</ListGroup.Item>
      <ListGroup.Item>Address: {address.street} | {address.city}</ListGroup.Item>
      <ListGroup.Item>Company Name: {company.name}</ListGroup.Item>
    </ListGroup>

    </div>
  )
}

export default ViewUser
