import React, { useState } from "react";
import * as c from "../CardCart/styles";

export const CardCart = (props) => {

    const { produto: { category, price, name, photos, id } } = props.product;
    const qtd = props.product.qtd;
    //const item = props.product;
/*     const removeItem = (id) => {
        const currentCart = props.getCart.filter((i) => {
            return i.id !== id;
        })
        props.setCartDel(currentCart);
    }
 */
    /* const addCarrinho = (item) => {
        const cart = props.getCart;
        const setCart = props.setCartDel;
        for(let i = 0; i < cart.length; i++){
          if(id === cart[i].id){
            cart[i].qtd += 1;
            setCart([...cart]);
            return null;
          }
        }
        const newProduct = {
          produto: item,
          qtd: 1
        }
        console.log(cart)
        setCart([...cart, newProduct]);  
    } */
    return (
        <>
            <c.CartContainer>
                <c.CardImg src={`${photos[0]}`} alt="" title="" />
                <c.CardInfos>
                    <c.CardInfoTitle>{name}</c.CardInfoTitle>
                    <c.CardInfoPrice>{price}</c.CardInfoPrice>
                    <c.CardControls>
                        <button onClick={props.addItem}>+</button>
                        <span>{qtd}</span>
                        <button onClick={props.rmItem}>-</button>
                    </c.CardControls>
                </c.CardInfos>
                <c.CardBtnDel>D</c.CardBtnDel>
            </c.CartContainer>
        </>
    )
}