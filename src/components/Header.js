import React from 'react'
import styled from 'styled-components'

import Logo from './../img/logo.png'
import SearchIcon from './../img/search.svg'
import CartIcon from './../img/cart.svg'

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
        height: 35px;
        border: none;
        margin-right: 10px;
        background-color: #F04E3E;
        color: #fff;
        cursor: pointer;

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

export default class Header extends React.Component {

    render() {

        return(
            <div>
            <HeaderContainer>
                <DivLogo>
                    <img src={Logo} />
                </DivLogo>
                <DivSearch>
                    <input placeholder='Buscar produto' />
                    <button> <img src={SearchIcon}/></button>
                </DivSearch>
                <DivMenu>
                    <button>INICIO</button>
                    <button>CADASTRAR</button>
                    <button> <img src={CartIcon}/> </button>
                </DivMenu>
                </HeaderContainer>
                <DivSubHeader>
                </DivSubHeader>
                </div>
        )
    }
}