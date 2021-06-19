import React, { useState } from 'react'
import './Nav.css'
import { NavLink} from './NavbarElements'

const Navbar = (props) => {
    const [navbar, setNavbar] = useState(false);


    const changeBg = () => {
        if(window.scrollY >= 80) {
            setNavbar(true) 
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBg);

    return (
        <>
           <div className={
               navbar ? 'navbar active' : 'navbar'
           }>
            <NavLink to ='/'>About</NavLink>
            <NavLink to ='/'>Product</NavLink>
            <NavLink to ='/'>Fruizzy</NavLink>
            <NavLink to ='/'>Cart</NavLink>
            <NavLink to ='/'>Contact</NavLink>

           </div>
        </>
    )
}

export default Navbar
