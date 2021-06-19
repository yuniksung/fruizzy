import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  color: white;
  text-shadow: 4px 4px 5px gray;
  font-size: 2rem;
  display: flex;
  align-items: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  margin: 0 30px;
  transition: 0.3s ease;

  :nth-child(3){
    font-size: 3rem;
    text-stroke: 5px red;
    color: yellow;
    text-shadow: 4px 4px 5px hotpink;

    :hover{
      color: yellow;
    }
  }

  :hover{
    color: hotpink;
  }


  
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }

`;