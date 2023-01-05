import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const EditUser = () => {

    //it will grab user id val from url and return it
    const { userId } = useParams();
    

    const navigate = useNavigate();
    const initialState = {name:"", username:"", email:"", phone:"", website:""};
    //set a new state user to hold the data
    const [user, setUser] = useState(initialState)

    //object destructuring to avoid using user dot in value field
    const {name, username, email, phone, website} = user;

    const onChangeInput = event =>{
        //...spread operator keeps adding(appends) data on top of input instead of overring the value input
        setUser({...user,[event.target.name]:event.target.value});
    }

    //useeffect hook to load data on onload
    useEffect(()=>{
        fetchUser();
    }, []);


    const fetchUser = async() =>{
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        // console.log(response);
        setUser(response.data);
    }
    
    const onFormSubmit = async (event) =>{
        event.preventDefault();
        if(!user.name){
            alert("Name cannot be empty");
            return;
        }
        if(!user.username){
            alert("Username cannot be empty");
            return;
        }
        if(!user.email){
            alert("Email cannot be empty");
            return;
        }
        if(!user.phone){
            alert("Phone cannot be empty");
            return;
        }
        await axios.put(`http://localhost:5000/users/${userId}`, user);
        navigate({ pathname: "/" });
    }

  return (
    <div className='container'>
      <div className='w-75 mx-auto p-5 shadow'>
        <h2 className='text-center mb-4'>Edit User</h2>

        <form onSubmit={(event)=> onFormSubmit(event)}>
            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Full Name'
                name='name' value={name} onChange={(event) => onChangeInput(event)}/>
                {/* name='name' value={user.name} onChange={(event) => onChangeInput(event)}/> */}
            </div>

            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Username'
                name='username' value={username} onChange={(event) => onChangeInput(event)}/>
            </div>


            <div className='form-group mb-3'>
                <input type='email' className='form-control form-control-lg' placeholder='Enter Your Email'
                name='email' value={email} onChange={(event) => onChangeInput(event)}/>
            </div>

            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Your Phone Number'
                name='phone' value={phone} onChange={(event) => onChangeInput(event)}/>
            </div>

            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Your Website'
                name='website' value={website} onChange={(event) => onChangeInput(event)}/>
            </div>
            <button type="submit" className='btn btn-info col-12'>Update User</button>
        </form>
        
      </div>
    </div>
  )
}

export default EditUser
