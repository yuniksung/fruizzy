import React from 'react'
import { Nav, NavLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
            <NavLink to ='/'>About</NavLink>
            <NavLink to ='/'>Product</NavLink>
            <NavLink to ='/'>Fruizzy</NavLink>
            <NavLink to ='/'>Cart</NavLink>
            <NavLink to ='/'>Contact</NavLink>

           </Nav>
        </>
    )
}

export default Navbar
