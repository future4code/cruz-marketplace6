import React from 'react'
import { AppContainer } from './components/AppContainer'
import Header from './components/Header'
import  Produtos  from './components/Produtos'
import  Filtro  from './components/Filtro'
import style from 'styled-components'

const Container = style.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 100px;

`
const Coluna1 = style.div`
  padding-right:12px;
  margin-left:4px;
  margin-bottom: 10px;
  padding-left: 50px;
 `
const Coluna2 = style.div`
grid-template-columns: 1fr 1fr 1fr;
`
function App() {
	return (
		<div>
			<Header/>
			<Container>
				<Coluna1><Filtro/></Coluna1>
				<Coluna2><Produtos/></Coluna2>
			</Container>
		</div>
	)
}

export default App
