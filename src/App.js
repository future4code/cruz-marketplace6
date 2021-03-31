import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import * as api from "./api/4used"

export default function App() {

  /* const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  
  const Adicionar = () => {

    const body = {
      "name": "Luana gracinha! Luana xuxu!",
      "description": "Esse é um produto muito legal!",
      "price": 10,
      "paymentMethod": "card",
      "category": "Categoria 1",
      "photos": ["https://picsum.photos/300/200"],
      "installments": 3
    }

    api.createPlaylist(body).then(() => {
      api.getAllPlaylists().then((result) => {
        setProdutos(result.data.products);
      })
    })
  }

  const deletar = (id) => {
    api.deletePlaylist(id).then(() => {
      api.getAllPlaylists().then((result) => {
        setProdutos(result.data.products);
      })
    });
  }

  const addCarrinho = (item) => {
    for(let i = 0; i < carrinho.length; i++){
      if(item.id === carrinho[i].produto.id){
        carrinho[i].qtd += 1;
        setCarrinho([...carrinho]);
        return null;
      }
    }
    const novoProduto = {
      produto: item,
      qtd: 1
    }
    console.log(carrinho)
    setCarrinho([...carrinho, novoProduto]);  
  }

  const rmItemCarrinho = (key) => {
    if(carrinho[key].qtd > 1){
      carrinho[key].qtd -= 1;
      console.log(carrinho[key].qtd);
      setCarrinho([...carrinho]);
    }else {
      const filtrados = carrinho.filter((item) => {
        carrinho[key].qtd = 0
        console.log(item.qtd);
        return item.qtd >= 1;
      })
      setCarrinho([...filtrados]);
      console.log(filtrados);
    }
  }

  useEffect(() => {
    api.getAllPlaylists().then((result) => {
      setProdutos(result.data.products);
      console.log(result)
    })
  }, [])

  const mostrarProdutos = produtos.map((produto) => {
    return <div key={produto.id}>{produto.name}<button onClick={() => addCarrinho(produto)}>carrinho</button><button onClick={() => deletar(produto.id)}>x</button></div>;
  })

  const printCarrinho = carrinho.map((item, key) => {
    //console.log(item.produto[0]);
    return <div key={item.produto.id}>{item.produto.name}<p>{item.qtd}</p><button onClick={() => addCarrinho(item.produto)}>+</button><button onClick={() => rmItemCarrinho(key)}>-</button><button>deletar</button><p></p></div>;
  }) */

  return (
    <Router>
      <Navbar />
      {/* <button onClick={Adicionar}>Adicionar</button>
      <button>Mostrar</button>
      {mostrarProdutos}
      {printCarrinho} */}
    </Router>
  );
}
