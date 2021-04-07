import styled from "styled-components";
//import { Container } from "../../globalStyles";

export const CartContainer = styled.div`
    padding: 20px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`
export const CardImg = styled.img`
    width: 25%;
`
export const CardInfos = styled.div`
    padding: 0 10px;
    & > * {
        margin: 15px 0;
    }
`
export const CardInfoTitle = styled.h5`
    font-weight: 500;
    font-size: 1rem;
    color: #888;
`
export const CardInfoPrice = styled.span`
    font-size: 1rem;
    font-weight: 700;
    display: block;
`
export const CardControls = styled.div`
    border: 1px solid #c5c5c5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    width: 94px;
    height: 30px;
    border-radius: 2px;
    overflow: hidden;
    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        width: 100%;
        height: 100%;
        font-weight: 600;
        font-size: 1.2rem;
    }
    & button:focus {
        outline: none;
    }
    & span {
        font-weight: 600;
        line-height: 30px;
        height: 100%;
        width: 100%;
        border-left: 1px solid #c5c5c5;
        border-right: 1px solid #c5c5c5;
    }
`   
export const CardBtnDel = styled.button`
    color: #fff;
    border: 0;
    border-radius: 2px;
    width: 40px;
    height: 30px;
    background: #43ADA5;
`