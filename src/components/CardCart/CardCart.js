import React, { useState } from "react";
import * as c from "./CardCartElements";

export const CardCart = () => {
    return (
        <>
            <c.CartContainer>
                <c.CardImg src="https://static3.tcdn.com.br/img/img_prod/629771/tenis_buffalo_domidona_plataforma_alto_confortavel_feminino_140_01_033_dourado_1861_1_20200716174147.jpg" alt="" title=""/>
                <c.CardInfos>
                    <c.CardInfoTitle>Nome do Produto Nome do Produto</c.CardInfoTitle>
                    <c.CardInfoPrice>R$ 22,50</c.CardInfoPrice>
                    <c.CardControls>
                        <button>+</button>
                        <span>0</span>
                        <button>-</button>
                    </c.CardControls>
                </c.CardInfos>
                <c.CardBtnDel>D</c.CardBtnDel>
            </c.CartContainer>
        </>
    )
}