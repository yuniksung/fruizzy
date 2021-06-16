import styled from 'styled-components';
import MenuB from '../../images/menu-bg-2.jpg';

export const MenuContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
`

export const MenuBg = styled.div`
    width: 30%;
    height: 100%;
    margin-right: auto;
    background: url(${MenuB});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;

`
export const MenuContent = styled.div`
    width: 70%;
    height: 100%;
    margin-left: auto;
    padding: 200px 50px;
`