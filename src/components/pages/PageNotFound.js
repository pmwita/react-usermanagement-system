import React from 'react'
import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import "./PageNotFound.css";


function PageNotFound() {
  return (
    <div className='hide-navbar'>
      <h1 className='p-4'>Page Does not exist</h1>
      <br />
      <button type="button" className="btn btn-primary">Normal Boostrap</button>

      <Button  className="m-2" variant="outline-primary">React Bootstrap</Button>{' '} 
       <br /> 
       <a href='/'>Home</a>
    </div>
  )
}

export default PageNotFound
