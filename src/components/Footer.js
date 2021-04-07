import React from 'react'
import styled from 'styled-components'

import InstagramLogo from './../img/instagram.png'
import FacebookLogo from './../img/facebook.png'
import MastercardLogo from './../img/mastercard.png'
import VisaLogo from './../img/visa.png'
import PaypalLogo from './../img/paypal.png'

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 65px;
    height: 160px;
    font-size: 1.20rem;
    font-weight: bold;
    background-color: #F9F9F9;
    border-bottom: 0.2px solid #A5A1A1;
`

const SubFooter = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 30px 65px;
    background-color: #F9F9F9;

    img {
        margin-right: 10px;
        height: 40px;
    }

`

const DivRight = styled.div`

    input {
        margin-top: 10px;
        width: 350px;
        height: 40px;
        border: 0,2px solid black;
        font-size: 1.20rem;
    }

    button {
        font-size: 1.20rem;
        font-weight: bold;
        color: #fff;
        width: 120px;
        height: 45px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: #eb5b34;

        :hover {
            background-color: #ff4f3f;
            box-shadow: 1px 1px 4px grey;
        }
    }
`

export default class Footer extends React.Component {

    render() {

        return (
            <div>
            <FooterContainer>
                <div>
                    <p>Contato</p>
                    <p>Termos de serviço</p>
                    <p>Política de privacidade</p>
                    <p>Cancelamento, troca e reembolso</p>
                </div>
                <DivRight>
                    <p>Newsletter</p>
                    <input
                        placeholder='Digite seu melhor e-mail'
                    />
                    <button>Inscrever</button>
                </DivRight>
            </FooterContainer>
            <SubFooter>
                <div>
                    <img src={InstagramLogo} />
                    <img src={FacebookLogo} />
                </div>
                <div>
                    <img src={MastercardLogo} />
                    <img src={PaypalLogo} />
                    <img src={VisaLogo} />
                </div>
            </SubFooter>
            </div>
        )
    }
}