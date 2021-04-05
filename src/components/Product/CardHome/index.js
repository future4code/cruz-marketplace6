import styled from "styled-components";
import * as c from "./styles"
import React from "react";

function CardHome(props) {
    const { product: { category, price, name, photos } } = props;

    return (
        <c.ContainerCardHome>
            <c.Header>
                <span>{category}</span>
            </c.Header>
            <c.Photo photos={photos[0]} />
            <c.Footer>
                <c.BlockInfos>
                    <c.Title>{name}</c.Title>
                    <c.Price>{Number(price)}</c.Price>
                </c.BlockInfos>
                <c.Carrinho onClick={props.addItem}>C</c.Carrinho>
            </c.Footer>
        </c.ContainerCardHome>
    )
}

export default CardHome;