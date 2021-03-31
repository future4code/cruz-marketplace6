import React, { Component } from "react";
import { createProduct } from "../api/api";

export function AppContainer() {
  const product1 = () => {
    const newProduct = {
      name: "Produto",
      description: "Esse é um produto muito legal!",
      price: 10,
      paymentMethod: "card",
      category: "Categoria 1",
      photos: ["https://picsum.photos/300/200"],
      installments: 3,
    };
    console.log("Teste");
    createProduct(newProduct).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <p>Pronto para começar!</p>
      <button onClick={product1}>Clique</button>
    </div>
  );
}
