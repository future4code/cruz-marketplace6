import React, { useState } from "react";
import * as c from "./CardCartElements";

export const CardCart = (props) => {
    const {name, price, photos} = props.cart
    console.log(props.cart)
    return (
        <>
            <c.CartContainer>
                <c.CardImg src={photos} alt="" title=""/>
                <c.CardInfos>
                    <c.CardInfoTitle>{name}</c.CardInfoTitle>
                    <c.CardInfoPrice>{price}</c.CardInfoPrice>
                    <c.CardControls>
                        <button>+</button>
                        <span>0</span>
                        <button>-</button>
                    </c.CardControls>
                </c.CardInfos>
                <c.CardBtnDel onClick={props.deleteProduct}>D</c.CardBtnDel>
            </c.CartContainer>
        </>
    )
}