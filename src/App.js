import React from 'react'
import {useState, useEffect} from 'react'
import { AppContainer } from './components/AppContainer'
import Header from './components/Header'
import  Produtos  from './components/Produtos'
import  Filtro  from './components/Filtro'
import Footer from './components/Footer'
import style from 'styled-components'
import * as api from './api/api'

const Container = style.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
`
const Coluna1 = style.div`
	margin-left: 50px;
 `
const Coluna2 = style.div`
	margin: 0 auto;
`
function App() {

	const [products, setProducts] = useState([]);

    useEffect(() => {
        api.getProduct().then((res) => {
            setProducts(res.data.products)
        })
    },[]);

	const productList = products.map(item => {
		console.log(item)
		return (
			<div>
				<Categoria>{item.category}</Categoria>
				<Imagem src={item.photos}/>
				<Titulo>{item.name}</Titulo>
				<Descricao>{item.description}</Descricao>
				<Preco>{item.price}</Preco>
				<Parcelas>{item.installements}</Parcelas>
				<Botao>Comprar</Botao>              
			</div>
		)
	})

	return (

		<div>
			<Header products={products}/>
			<Container>
				<Coluna1><Filtro/></Coluna1>
				<Coluna2>{productList}</Coluna2>
			</Container>
			<Footer/>
		</div>

	)
}

export default App;


