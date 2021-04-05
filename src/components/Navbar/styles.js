import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  border-bottom: 1px solid #d6d6d6;
  padding: 20px 0;
  background: inherit;
  height: auto;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .align {
    display: flex;
    align-items: center;
  }
  }
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #222;
  cursor: pointer;
  & img {
    width: 170px;
  }
`;

export const BlockMobileIcon = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  transition: all .3s ease-out;
  opacity: ${({modal}) => (modal ? 0.65 : 0)};
  visibility: ${({modal}) => (modal ? "visible" : "hidden")};
  z-index: 999;
`

export const CartIcon = styled.div`
  position: relative;
  font-size: 1.2rem;
  opacity: ${({cart}) => (cart ? 0 : 1)};
  visibility: ${({cart}) => (cart ? 'hidden' : 'visible')};
  & span{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 1px solid #ddd;
    left: 76px;
    top: -10px;
    height: 40px;
    width: 40px;
    border-radius: 100px;
  }
`

export const MobileIcon = styled.div`
  display: none;
  font-size: 2.0rem;
  border-radius: 60px;
  cursor: pointer;
  opacity: ${({clickMenu}) => (clickMenu ? 0 : 1)};
  visibility: ${({clickMenu}) => (clickMenu ? 'hidden' : 'visible')};
  trasition: all 0.3 ease-out;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const SearchBar = styled.input`
  margin-left: 30px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export const NavMenu = styled.ul`
  display:flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 1024px){
    position: absolute;
    align-items: flex-start;
    width: content;
    height: 100vh;
    padding: 40px 60px;
    top: 0;
    background: #fff;
    flex-flow: column nowrap;
    color: #fff;
    transition: all .3s ease-out;
    left: ${({click}) => (click ? 0 : '-100%')};
  }
`;

export const NavItem = styled.li`
  font-size: 0.9em;
  padding-left: 20px;
  @media screen and (max-width: 1024px){
    padding: 10px 0;
  }
`;

export const NavLinks = styled(Link)`
  color: #333;
  text-decoration: none;
  font-style: none;
  @media screen and (max-width: 1024px){
    color: #000;
  }
`;

/** ********************
 *  ******* CART *******
 *  ********************/

export const CartContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  height: 100%;
  width: 280px;
  background: #fff;
  transition: all .3s ease-out;
  right: ${({cart}) => (cart ? 0 : '-100%')};
  z-index: 999;
`

export const CartContent = styled(Container)`
  postion: absolute;
  overflow-y: scroll;
  flex-flow: column nowrap;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 16px;  
  ${Container}
`
export const CartHeader = styled.div`
  background: #f4f4f4;
  z-index: 999;
  box-shadow: 0px 0px 4px #999;
  postion: absolute;
  width: 100%;
  & h4 {
    padding: 14px 10px;
  }
`

export const CartBottom = styled.div`
  z-index: 999;
  border-top: 1px solid #d6d6d6;
  background: #e8e8e8;
  box-shadow: 0px 0px 4px #999;
  postion: fixed;
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  & div {
    font-size: 0.9em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 6px;
  }
  & div:last-of-type {
    margin-bottom: 10px;
  }
  & span:last-child {
    font-weight: bold;
  }
  & span:first-child{
    color: #555;
  }
  & button {
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(236,30,13,1) 0%, rgba(215,57,39,1) 50%, rgba(215,57,39,1) 100%);
    width: 100%;
    border: 0;
    padding: 10px;
  }
`