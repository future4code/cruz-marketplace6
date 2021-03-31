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
  }
  }
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #222;
  cursor: pointer;
`;

export const BlockMobileIcon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  transition: all .3s ease-out;
  opacity: ${({modal}) => (modal ? 0.65 : 0)};
  visibility: ${({modal}) => (modal ? "visible" : "hidden")};
`

export const CartIcon = styled.div`
  font-size: 1.2rem;
  opacity: ${({cart}) => (cart ? 0 : 1)};
  visibility: ${({cart}) => (cart ? 'hidden' : 'visible')};
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
 
  &:focus {
   
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

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 250px;
  background: #fff;
  transition: all .3s ease-out;
  right: ${({cart}) => (cart ? 0 : '-100%')};
`

export const CartContent = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;  
  ${Container}
`