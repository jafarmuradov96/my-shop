import React from 'react'
import NavbarLeft from './navbar-item/NavbarLeft';
import NavbarRight from './navbar-item/NavbarRight';

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center sticky">
        <NavbarLeft />
        <NavbarRight />
    </div>
  )
}

export default Navbar;