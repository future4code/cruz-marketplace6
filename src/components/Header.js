import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from './../img/logo.png'
import SearchIcon from './../img/search.svg'
import CartIcon from './../img/cart.svg'
import { CardCart } from "./CardCart/CardCart"



const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 70px;
    padding: 20px 20px;
    align-items: center;
    background-color: #fff;
`

const DivLogo = styled.div`

`

const DivSearch = styled.div`
    display: flex;
    box-shadow: 2px 2px 6px lightgray;

    input {
        width: 400px;
        height: 35px;
        border: 0.1px solid lightgray;
        outline: none;
        font-size: 18px;
        color: grey;

        ::placeholder {
            font-size: 18px;
            color: lightgray;
        }
    }

    button {
        height: 39px;
        border: 0.1px solid lightgray;
        background-color: #fff;
        cursor: pointer;
        border-left: 1px solid lightgrey;

        :hover {
            box-shadow: 1px 1px 4px grey;
        }
        
        img {
            
        }
    }
`

const DivMenu = styled.div`
    display: flex;
    align-items: center;

    button {
        height: 45px;
        border-radius: 5px;
        border: none;
        margin-right: 10px;
        background-color: #F04E3E;
        color: #fff;
        cursor: pointer;
        outline: none;

        :hover {
            background-color: #ff4f3f;
            box-shadow: 1px 1px 4px grey;
        }

        :last-of-type {
            height: 60px;
            width: 60px;
            border-radius: 50%;
        }

        img {
            width: 30px;
        }
    }
`

const DivSubHeader = styled.div`
    height: 40px;
    background-color: #2C726C;
`

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
  right: ${({ cart }) => (cart ? 0 : '-100%')};
  z-index: 999;
`

export const CartContent = styled.div`
  postion: absolute;
  overflow-y: scroll;
  flex-flow: column nowrap;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 16px;  
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

export const BlockMobileIcon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  transition: all .3s ease-out;
  opacity: ${({ modal }) => (modal ? 0.65 : 0)};
  visibility: ${({ modal }) => (modal ? "visible" : "hidden")};
  z-index: 1;
`

export default function Header() {
    const [clickModal, setClickModal] = useState(false);
    const [clickMenu, setClickMenu] = useState(false);
    const [clickCart, setClickCart] = useState(false);
    const [cart, setCart] = useState({}); 

    
    
    const deleteProduct = (id) => {
        const cartCopy = [...cart]
        const removeProduct = cartCopy.filter(item => item.id !== id)
        setCart(removeProduct)
        
    }


    const handleClick = () => {
        setClickMenu(!clickMenu);
        setClickModal(!clickModal);
    };

    const handleClickCart = () => {
        setClickCart(!clickCart);
        setClickModal(!clickModal);
    };

    const handleClickOff = () => {
        setClickMenu(false);
        setClickModal(false);
        setClickCart(false);
    }

    return (
        <div>
            <HeaderContainer>
                <DivLogo>
                    <img src={Logo} />
                </DivLogo>
                <DivSearch>
                    <input placeholder='Buscar produto' />
                    <button> <img src={SearchIcon} /></button>
                </DivSearch>
                <DivMenu>
                    <button>INICIO</button>
                    <button>CADASTRAR</button>
                    <button onClick={handleClickCart}> <img src={CartIcon} /> </button>
                </DivMenu>
            </HeaderContainer>
            <DivSubHeader>
            </DivSubHeader>
            <CartContainer cart={clickCart}>
                <CartHeader>
                    <h4>CARRINHO DE COMPRAS:</h4>
                </CartHeader>
                <CartContent>
                    <CardCart cart={cart} deleteProduct={deleteProduct}/>
                </CartContent>
                <CartBottom>
                    <div><span>Subtotal:</span><span>R$ 5.545,00</span></div>
                    <div><span>Frete:</span><span>R$ 5.545,00</span></div>
                    <button>FINALIZAR COMPRA</button>
                </CartBottom>
            </CartContainer>
            <BlockMobileIcon onClick={handleClickOff} modal={clickModal}>
            </BlockMobileIcon>
        </div>
    )

}