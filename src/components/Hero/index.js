import React, { useState } from 'react'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        tasty healthy <span>fruizzy</span>
                    </HeroH1>
                    <HeroP>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </HeroP>
                    <HeroBtn>
                        Place Order
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
