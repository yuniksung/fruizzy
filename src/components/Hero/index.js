import React from 'react'
import Navbar from '../Navbar/index'

// Style-components
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroBtn 
} from './HeroElements'

const Hero = () => {

    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        tasty healthy <span>fruizzy</span>
                    </HeroH1>
                    <HeroBtn>
                        Place Order
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
