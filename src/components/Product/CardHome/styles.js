import styled from "styled-components";

export const Photo = styled.div`
    border-radius: 5px;
    text-align: center;
    width: 100%;
    height: 200px;
    background-image: url(${({photos}) => (photos)});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
`

export const ContainerCardHome = styled.div`
    margin: 0 8px;
    display: flex;
    flex-flow: column nowrap;
    width: 210px;
    transform: scale(0.95);
    transition: all 0.2s ease;
    &:hover {
        transform: scale(1.0);
    }
    &:hover ${Photo} {
        filter: brightness(80%);
    }
`

export const Header = styled.div`
    text-align: center;
    padding: 15px 0;
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    padding: 14px 0;
`
export const BlockInfos = styled.div`

`

export const Title = styled.div`
    
`

export const Price = styled.div`
   font-weight: 700;
   font-size: 1.2rem;
`

export const Carrinho = styled.div`
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #fff;
    background: linear-gradient(90deg,rgba(236,30,13,1) 0%,rgba(215,57,39,1) 50%,rgba(215,57,39,1) 100%);
    &:hover {
        cursor: pointer;
        background: #000;
        color: #fff;
    }
`