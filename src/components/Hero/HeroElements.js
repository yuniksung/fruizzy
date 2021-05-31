import styled from 'styled-components';
import ImgBg from '../../images/hero-chung-1.png'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
    height: 100vh;
    background-position: left;
    background-repeat: none;
    background-size: cover;
` 