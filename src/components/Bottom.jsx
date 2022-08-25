import React from 'react'
import email from '../assets/Icon.png'
const Bottom = () => {
  return (
   
    <div className='Bottom'>
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h5>laurasmith.website</h5>
      <button>
        <img src={email}/>
          <p>Email</p>
      </button>
      <h2>About</h2>
      <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <h2>Interests</h2>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>

    </div>
  )
}

export default Bottom