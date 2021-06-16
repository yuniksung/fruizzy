import React from 'react'

// Style-components
import { 
    AboutContainer, 
    AboutHeading, 
    AboutText, 
    ImgContainer, 
    SampleImg 
} from './AboutElement';

// SampleImg
import strawChung from '../../images/straw-chung.jpg'
import limeChung from '../../images/lime-chung.png'
import watermelonChung from '../../images/watermelon-chung.jpg'
import lemonChung from '../../images/lemon-chung.jpg'
import somethingChung from '../../images/something-chung.jpg'

const About = () => {
    return (
        <AboutContainer>
            <AboutHeading>
                About <span>Fruizzy</span>
            </AboutHeading>
            <AboutText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem commodi ratione illo dicta non deserunt possimus id, beatae facere sapiente voluptatum inventore facilis nulla voluptates at sequi quos dolores nihil! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem commodi ratione illo dicta non deserunt possimus id, beatae facere sapiente voluptatum inventore facilis nulla voluptates at sequi quos dolores nihil!
            </AboutText>
            {/* 5 pictures of the products */}
            <ImgContainer>
                <SampleImg src={strawChung} alt="sample image"/>
                <SampleImg src={limeChung} alt="sample image"/>
                <SampleImg src={watermelonChung} alt="sample image"/>
                <SampleImg src={lemonChung} alt="sample image"/>
                <SampleImg src={somethingChung} alt="sample image"/>
            </ImgContainer>
        </AboutContainer>
    )
}

export default About
