import React, { Component } from "react";
import { createProduct } from "../api/api";
import styled from "styled-components";

const InputProductPrice = styled.input`
  text-align: right;
`;

export class createProductSell extends Component {
    state = {
       productCategory: "",
       productName: "",
       productDescription: "",
       productNewUsed: "",
       productPrice: "",
       productInstallement: 1,
       productPaymentMethod: "",
       productLink: "",
    };

    handleProductCategory = (e) => {
      this.setState({ productCategory: e.target.value });
    };

    handleInputproductName = (e) => {
      this.setState({ productName: e.target.value });
    };

    handleInputProductDescription = (e) => {
      this.setState({ productDescription: e.target.value });
    };

    handleProductNewUsade = (e) => {
      this.setState({ productNewUsed: e.target.value });
    };

    handleInputProductPrice = (e) => {
      this.setState({ productPrice: e.target.value });
    };

    handleProductPaymentMethod = (e) => {
      if (this.state.handleProductPaymentMethod === "Cartão de Crédito") {
          this.setState({ productInstallement: 1 });
      } 
      this.setState({ productPaymentMethod: e.target.value });
      };

    handleSelectInstallement = (e) => {
      this.setState({ productInstallement: e.target.value });
    };

    handleInputProductLink = (e) => {
      this.setState({ productLink: e.target.value });
    };

    cleanInstallment = (e) => {
      this.setState({ productInstallment: 1 });
    };


    newProductSell = () => {
      const newCardProduct = {
        category: this.state.productCategory,
        name: this.state.productName,
        description: this.state.productDescription,
        price: Number(this.state.productPrice),
        installments: Number(this.state.productInstallments),
        paymentMethod: this.state.productPaymentMethod,
        photos: [this.state.productLink],
      };
        //console.log("Teste");
      createProduct(newCardProduct).then((res) => {
        console.log(res.config.data);
        alert("Produto Adicionado com Sucesso!");
      this.setState({
        productCategory: "",
        productName: "",
        productDescription: "",
        productNewUsed: "",
        productPrice: "",
        productInstallement: 1,
        productPaymentMethod: "",
        productLink: "",
      });
    }) .catch((er) => {
      console.log(er);
    });
      
  };
 
    
  render() {
    const installments = this.state.productPaymentMethod ===
      "Cartão de Crédito" && (
      <div>
        <select onChange={this.handleSelectInstallment} value={this.state.productInstallments}>
          <option value={1}> 1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </select>
      </div>
    );

    return (
      <div>
        <h1>Insira o seu Produto</h1>
        <p>Informe o Nome do seu Produto</p>
        <input
          value={this.state.productName}
          onChange={this.handleInputProductName}
        />

        <p>Informe a Categoria do seu Produto</p>
        <select onChange={this.handleProductCategory} value={this.state.productCategory}>
          <option value=""></option>
          <option value="Acessórios">Acessório</option>
          <option value="Roupas">Roupa</option>
          <option value="Calçados">Calçado</option>
          <option value="Brinquedos">Brinquedo</option>
          <option value="Móveis">Móvel</option>
          <option value="Vintage">Produtos Vintage</option>          
          <option value="Eletrônicos">Eletrônico</option>
        </select>

        <p>Descrição do Produto</p>
          <input
            onChange={this.handleInputDescription}
            value={this.state.productDescription}
          />

        <div>
          <input
            type="mesa"
            id="new-mesa"
            name="new-used"
            value="Novo"
            onChange={this.handleNewUsed}
          />
          <label placeholder="new-mesa">Novo</label>

          <input
            type="mesa"
            id="used-mesa"
            name="new-used"
            value="Usado"
            onChange={this.handleNewUsed}
          />
          <label placeholder="used-mesa">Usado</label>
         </div>

        <p>Valor do Produto</p>
          <InputProductPrice 
              type="number" value={this.state.productPrice} 
              onChange={this.handleInputProductPrice}
          >
          </InputProductPrice>
        <span> R$</span>
        <p>Forma de Pagamento</p>
        <div>
          <select onChange={this.handleProductPaymentMethod} value={this.state.productPaymentMethod}>
            <option value=""></option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Boleto">Boleto</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Depósito">PIX</option>
          </select>
          <div>{installments}</div>
        </div>
        <p>Link Imagem</p>
        <input value={this.state.productLink} onChange={this.handleInputProductLink}></input>

        <button onClick={this.newProductSell}>Criar Produto</button>
      </div>
    );
  }
}

