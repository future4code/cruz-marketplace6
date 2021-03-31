import React from 'react'
import style from 'styled-components'


const DivFiltro = style.div`
    height: 500px;
    width: 250px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 6px solid #eb5b34;
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

const NomeFiltro = style.div `
margin-bottom: 10px;
font-weight: bold;
`

const InputFiltro = style.input `
margin-bottom: 20px;

`


const Categoria = style.select `
padding: 5px 60px;
padding-left: 10px;
text-align: center;
`

const Options = style.option `

`


export default class Produtos extends React.Component{

    render(){
        return (
                <DivFiltro>
                    <NomeFiltro>Valor Máximo:</NomeFiltro>
                    <InputFiltro/>
                    <NomeFiltro>Valor Mínimo:</NomeFiltro>
                    <InputFiltro/>
                    <NomeFiltro>Titulo / Descrição: </NomeFiltro>
                    <InputFiltro/>
                    <NomeFiltro>Categoria: </NomeFiltro>
                    <Categoria>
                        <Options>Vestidos</Options>
                        <Options>Eletrônicos</Options>
                    </Categoria>
                </DivFiltro>
            )}

}