import React from 'react'
import './Hello.css'
const Hello = (props) => {
  return (
    <div className='card'>
        <img className='Profile' src="..\src\assets\ProfilePic.png" alt="Profile Picture" />
       <h2 className='text'> Name :- {props.name}!</h2>
       <h2 className='text'> Emp ID :-{props.id}</h2>
       <h2 className='text'> Role :-{props.role}</h2>
       <h2 className='text'> Mobile No :-{props.no}</h2>
       <h2 className='text'> Address :-{props.address}</h2>

    </div>
  )
}

export default Hello



