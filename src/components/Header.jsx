import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

  return (
    <div>
      <div>
        <button onClick={() => {
          navigate('/counter');
        }}>go counter</button>
        
        <button onClick={() => {
          navigate('/info');
        }}>go info</button>

        <button onClick={() => {
          navigate('/menu');
        }}>go menu</button>
      </div>
    </div>
  )
}

export default Header
