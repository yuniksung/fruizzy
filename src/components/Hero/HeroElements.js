import styled from 'styled-components';
import ImgBg from '../../images/hero-chung-1.jpg'

export const HeroContainer = styled.div`
    background:url(${ImgBg});
    height: 100vh;
    background-position: left center;
    background-size: 100%;
` 

export const HeroContent = styled.div`
    height:calc(100vh -80px);
    max-height: 100%;
    width: 90vw;
    margin: auto;
    padding: 0rem calc((100vh - 1300px)/2);

`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 800px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`



export const HeroH1 = styled.h1`
  font-size: clamp(3rem, 10vw, 6rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  text-shadow: 4px 4px rgba(128, 128, 128, 0.7);

  span{
    color: rgb(240, 128, 165);
  }
`;

export const HeroP = styled.p`
  
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  text-shadow: 3px 3px rgba(128, 128, 128, 0.7);

`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;