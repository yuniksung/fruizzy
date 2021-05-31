import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'

const Navbar = () => {
    return (
        <>
           <Nav>
               <NavLink to ='/'>Fruizzy</NavLink>
               <NavIcon>
                   <p>Meun</p>
                   <Bars />
               </NavIcon>
           </Nav>
        </>
    )
}

export default Navbar
