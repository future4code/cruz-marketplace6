import React, { useContext, useState } from "react";
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
  CartHeader,
  CartBottom
} from "./styles";
import { CardCart } from "../Product/CardCart"
import { CartContext } from "../../store";
import Logo from '../../assets/img/logo.png'

const Navbar = (props) => {
  const [clickModal, setClickModal] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);
  const [cart, setCart] = useState(false);

  const [cartCtx, setCartCtx, addItemCart, rmItemCart, subTotal, total] = useContext(CartContext);

  const handleClick = () => {
    setClickMenu(!clickMenu);
    setClickModal(!clickModal);
  };

  const handleClickCart = () => {
    setCart(!cart);
    setClickModal(!clickModal);
  };

  const handleClickOff = (srting) => {
    setClickMenu(false);
    setClickModal(false);
    setCart(false);
    props.setPage(srting);
  }
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <div className="align">
            <NavLogo to="/"><img src={Logo} alt="logo" title="logo" /></NavLogo>
            <SearchBar placeholder="Procurando por..." />
          </div>
          <CartIcon onClick={handleClickCart} cart={cart}>
            Carrinho<span>{total}</span>
          </CartIcon>
          <MobileIcon onClick={handleClick} clickMenu={clickMenu}>
            {clickMenu ? '+' : '-'}
          </MobileIcon>
          <BlockMobileIcon onClick={() => handleClickOff(props.page)} modal={clickModal}>
          </BlockMobileIcon>
          <NavMenu click={clickMenu}>
            <NavItem>
              <NavLinks onClick={() => handleClickOff('home')} to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => handleClickOff('cadastrar')} to="/home">Cadastrar Produtos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleClickOff} to="/outro">Categorias</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <CartContainer cart={cart}>
        <CartHeader>
          <h4>CARRINHO DE COMPRAS:</h4>
        </CartHeader>
        <CartContent>
            {cartCtx.map((i, key) => {
              return <CardCart addItem={() => addItemCart(i.produto, i.produto.id, cartCtx, setCartCtx)} rmItem={() => rmItemCart(key)} product={i} setCartDel={setCartCtx} getCart={cartCtx} key={Math.random().toString(36).substr(2, 10)}/>
            })}
        </CartContent>
        <CartBottom>
          <div><span>Subtotal:</span><span>{subTotal}</span></div>
          <div><span>Frete:</span><span>{}</span></div>
          <button>FINALIZAR COMPRA</button>
        </CartBottom>
      </CartContainer>
    </>
  );
};

export default Navbar;