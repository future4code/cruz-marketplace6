import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  SearchBar,
  NavItem,
  NavMenu,
  NavLinks,
  BlockMobileIcon,
  CartIcon,
  CartContainer,
  CartContent,
} from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [clickModal, setClickModal] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);
  const [cart, setCart] = useState(false);

  const handleClick = () => {
    setClickMenu(!clickMenu);
    setClickModal(!clickModal);
  };

  const handleClickCart = () => {
    setCart(!cart);
    setClickModal(!clickModal);
  };

  const handleClickOff = () => {
    setClickMenu(false);
    setClickModal(false);
    setCart(false);
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <div className="align">
            <NavLogo to="/">Logotipo</NavLogo>
            <SearchBar />
          </div>
          <CartIcon onClick={handleClickCart} cart={cart}>
            Carrinho
          </CartIcon>
          <MobileIcon onClick={handleClick} clickMenu={clickMenu}>
            {clickMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <BlockMobileIcon onClick={handleClickOff} modal={clickModal}>
          </BlockMobileIcon>
          <NavMenu click={clickMenu}>
            <NavItem>
              <NavLinks onClick={handleClickOff} to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleClickOff} to="/home">Produtos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleClickOff} to="/outro">Categorias</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <CartContainer cart={cart}>
        <CartContent>
         
        </CartContent>
      </CartContainer>
    </>
  );
};

export default Navbar;
