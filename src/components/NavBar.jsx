import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-screen flex gap-5 items-center mb-10 mt-5 justify-center'>
        <NavLink>Home</NavLink>
        <NavLink to={"/country"}>Country</NavLink>
    </div>
  )
}

export default NavBar