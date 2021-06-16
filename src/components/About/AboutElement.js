import styled from 'styled-components'

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 200px;
    background-color: #f1f1f1;
`

export const AboutHeading = styled.h1`
    letter-spacing: 2px;
    font-size: clamp(1rem, 5vw, 2.5rem);
    margin-bottom: 1rem;

    span{
        color: rgb(240, 128, 165);
        text-transform: uppercase;
    }
    
`

export const AboutText = styled.p`
    letter-spacing: 1px;
    text-align: center;
    padding-bottom: 20px;
    font-size: 1.1rem;

    span{
        color: rgb(255, 100, 150);
        text-transform: uppercase;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding-top: 40px;
`;

export const SampleImg = styled.img`
    width: 200px;
    height: 250px;
    border: 1px solid gray;
    transition: 0.2s ease-out;

    @media screen and (max-width: 700px) {
        width: 100px;
        height: 150px;
      }

    :hover{
        box-shadow: 1px 2px gray;
    }
`;