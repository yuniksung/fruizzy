import React from 'react'

// Style-components
import { 
    AboutContainer, 
    AboutHeading, 
    AboutText, 
} from './AboutElement';



const About = () => {
    return (
        <AboutContainer>
            <AboutHeading>
                About <span>Fruizzy</span>
            </AboutHeading>
            <AboutText>
                One of the most popular beverages in Korea is <span>'Cheong'</span>, regardless of age. However, since there was no such thing as Cheong in the United States, he often made and enjoyed Cheong at home. When he lost a job due to Covid19, he decided to sell cheong at the farmer's market. He changed the name cheong to <span>Fruizzy</span> and he starts a journey.
            </AboutText>
            {/* 5 pictures of the products */}
        </AboutContainer>
    )
}

export default About
