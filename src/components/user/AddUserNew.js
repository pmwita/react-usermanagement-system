import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const AddUserNew = () => {

    const navigate = useNavigate();

    // const initialState = {name:"", username:"", email:"", phone:"", website:""};
    //set a new state user to hold the data
    // const [user, setUser] = useState(initialState)

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [username, setUsername]= useState("");
    const [website, setWebsite]= useState("");

    //object destructuring to avoid using user dot in value field
    // const {name, username, email, phone, website} = user;

    // const onChangeInput = event =>{
    //     //...spread operator keeps adding(appends) data on top of input instead of overring the value input
    //     setUser({...user,[event.target.name]:event.target.value});
    // }

    const onNameChange = e =>{
        setName(e.target.value);
    }
    const onUsernameChange = e =>{
        setUsername(e.target.value);
    }
    const onEmailChange = e =>{
        setEmail(e.target.value);
    }
    const onPhoneChange = e =>{
        setPhone(e.target.value);
    }
    const onWebsiteChange = e =>{
        setWebsite(e.target.value);
    }
    const onFormSubmit = async (event) =>{
        event.preventDefault();
        if(!name){
            alert("Name cannot be empty");
            return;
        }
        if(!username){
            alert("Username cannot be empty");
            return;
        }
        if(!email){
            alert("Email cannot be empty");
            return;
        }
        if(!phone){
            alert("Phone cannot be empty");
            return;
        }
        await axios.post("http://localhost:5000/users", user);
        navigate({ pathname: "/" });
    }

    const user = {name:name, username:username, email:email, phone:phone, website:website }

  return (
    <div className='container'>
      <div className='w-75 mx-auto p-5 shadow'>
        <h2 className='text-center mb-4'>Add User</h2>

        <div>
            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Full Name'
                name='name' value={name} onChange={(event) =>     //     setUser({...user,[event.target.name]:event.target.value});
                (event)}/>
                {/* name='name' value={user.name} onChange={(event) => onChangeInput(event)}/> */}
            </div>

            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Username'
                name='username' value={username} onChange={(event) => onUsernameChange(event)}/>
            </div>


            <div className='form-group mb-3'>
                <input type='email' className='form-control form-control-lg' placeholder='Enter Your Email'
                name='email' value={email} onChange={(event) => onEmailChange(event)}/>
            </div>

            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Your Phone Number'
                name='phone' value={phone} onChange={(event) => onPhoneChange(event)}/>
            </div>

            <div className='form-group mb-3'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter Your Website'
                name='website' value={website} onChange={(event) => onWebsiteChange(event)}/>
            </div>
            <button onClick={(event)=> onFormSubmit(event)} className='btn btn-info col-12'>Add User</button>
        </div>
        
      </div>
    </div>
  )
}

export default AddUserNew
