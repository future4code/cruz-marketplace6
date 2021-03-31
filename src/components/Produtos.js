import React from 'react'
import style from 'styled-components'

// Estilização container principal está inline
// box-shadow: 0px 0px 6px #eb5b34;
const DivBox = style.div`
    height: 60%;
    width: 200px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-bottom: 6px solid #eb5b34;
    border-radius: 10px;
    display: flex;
    text-align: center;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-top: 40px;
    transition: transform 100ms ease-in-out;
    
    :hover {
        transform: scale(1.05);
    }
`

const Categoria = style.h5`
    text-align: center;
    color: #eb5b34;
    font-size: 16px;
    padding-top: 30px;
`
const Imagem = style.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
`

const Titulo = style.h3`
    font-size: 20px;
    letter-spacing: 0px;
    color: #000;
    margin: 0;
    margin-top: 15px;
`

const Descricao = style.p`
    font-size: 16px;
    letter-spacing: 0px;
    color: darkgrey;
    margin: 5px 0px 5px 0px;
`

const Preco = style.h4`
    font-size: 26px;
    letter-spacing: 0px;
    color: #000;
    margin: 15px 0px 15px 0px;
`
const Parcelas = style.h5 `
    margin-top: 5px;
`
const Botao = style.button`
    border: none;
    border-radius: 8px;
    text-align: center;
    font-weight: bolder;
    color: white;
    background-color: #eb5b34;
    padding: 20px 50px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: none;

    :hover{
        background:#f44336
    }    
`

const Container = style.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    
`
export default class Produtos extends React.Component{

    render(){
        return (
            <Container>
                <DivBox>
                    <Categoria>Moveis</Categoria>
                    <Imagem src='https://www.dlojavirtual.com/wp-content/uploads/2018/05/198748-entenda-como-funcionam-os-sites-de-compras-confiaveis.jpg'/>
                    <Titulo>Mesa de jantar</Titulo>
                    <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Descricao>
                    <Preco>R$ 500,00</Preco>
                    <Parcelas>10x de R$69,90</Parcelas>
                    <Botao>Comprar</Botao>              
                </DivBox>
                <DivBox>
                    <Categoria>Moveis</Categoria>
                    <Imagem src='https://www.dlojavirtual.com/wp-content/uploads/2018/05/198748-entenda-como-funcionam-os-sites-de-compras-confiaveis.jpg'/>
                    <Titulo>Mesa de jantar</Titulo>
                    <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Descricao>
                    <Preco>R$ 500,00</Preco>
                    <Parcelas>10x de R$69,90</Parcelas>
                    <Botao>Comprar</Botao>              
                </DivBox>
                <DivBox>
                    <Categoria>Moveis</Categoria>
                    <Imagem src='https://www.dlojavirtual.com/wp-content/uploads/2018/05/198748-entenda-como-funcionam-os-sites-de-compras-confiaveis.jpg'/>
                    <Titulo>Mesa de jantar</Titulo>
                    <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Descricao>
                    <Preco>R$ 500,00</Preco>
                    <Parcelas>10x de R$69,90</Parcelas>
                    <Botao>Comprar</Botao>              
                </DivBox>  
                <DivBox>
                    <Categoria>Moveis</Categoria>
                    <Imagem src='https://www.dlojavirtual.com/wp-content/uploads/2018/05/198748-entenda-como-funcionam-os-sites-de-compras-confiaveis.jpg'/>
                    <Titulo>Mesa de jantar</Titulo>
                    <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Descricao>
                    <Preco>R$ 500,00</Preco>
                    <Parcelas>10x de R$69,90</Parcelas>
                    <Botao>Comprar</Botao>              
                </DivBox>
                <DivBox>
                    <Categoria>Moveis</Categoria>
                    <Imagem src='https://www.dlojavirtual.com/wp-content/uploads/2018/05/198748-entenda-como-funcionam-os-sites-de-compras-confiaveis.jpg'/>
                    <Titulo>Mesa de jantar</Titulo>
                    <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Descricao>
                    <Preco>R$ 500,00</Preco>
                    <Parcelas>10x de R$69,90</Parcelas>
                    <Botao>Comprar</Botao>              
                </DivBox>
                <DivBox>
                    <Categoria>Moveis</Categoria>
                    <Imagem src='https://www.dlojavirtual.com/wp-content/uploads/2018/05/198748-entenda-como-funcionam-os-sites-de-compras-confiaveis.jpg'/>
                    <Titulo>Mesa de jantar</Titulo>
                    <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Descricao>
                    <Preco>R$ 500,00</Preco>
                    <Parcelas>10x de R$69,90</Parcelas>
                    <Botao>Comprar</Botao>              
                </DivBox>
            </Container>
            )}

}
