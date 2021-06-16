import styled from 'styled-components'

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 200px;
    background-color: #f1f1f1;
`

export const AboutHeading = styled.h1`
    letter-spacing: 2px;

    span{
        color: rgb(240, 128, 165);
        text-transform: uppercase;

    }
    
`

export const AboutText = styled.p`
    letter-spacing: 1px;
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

    :hover{
        box-shadow: 1px 2px gray;
    }
`;