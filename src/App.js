import React from 'react'
import { AppContainer } from './components/AppContainer'
import Header from './components/Header'
import  Produtos  from './components/Produtos'
import  Filtro  from './components/Filtro'

function App() {
	return (
		<div>
			<Header/>
			<Filtro/>
			<Produtos/>
		</div>
	)
}

export default App
