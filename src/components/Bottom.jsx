import React from 'react'
import email from '../assets/Icon.png'
const Bottom = () => {
  return (
   
    <div>
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h5>laurasmith.website</h5>
      <button>
        <img src={email}/>
          <p>Email</p>
      </button>
      <h2>About</h2>
      
    </div>
  )
}

export default Bottom