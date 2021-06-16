import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { VscMenu } from "react-icons/vsc";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-shadow: 3px 3px rgba(128, 128, 128, 0.7);
  font-size: 2rem;
  display: flex;
  align-items: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  margin: 0 20px;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }

  :nth-child(3){
    font-size: 3rem;
    text-stroke: 5px red;
    color: yellow;
    text-shadow: 4px 4px hotpink;

  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(VscMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;