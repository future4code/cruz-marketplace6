import React from 'react'
import { AppContainer } from './components/AppContainer'
import Header from './components/Header'
import  Produtos  from './components/Produtos'
import  Filtro  from './components/Filtro'
import Footer from './components/Footer'
import style from 'styled-components'

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
	return (
		<div>
			<Header/>
			<Container>
				<Coluna1><Filtro/></Coluna1>
				<Coluna2><Produtos/></Coluna2>
			</Container>
			<Footer/>
		</div>
	)
}

export default App
