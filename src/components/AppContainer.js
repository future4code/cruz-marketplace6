import React, { Component } from "react";
import styled from "styled-components";
import createProductSell from "../components/createProductSell";


export const ComponentsContainer = styled.div`
  width: 100%;
`;

export const ScreenComponents = styled.div`
  padding: 0 5em;
`;

export class AppContainer extends Component {
  state = {
    renderedScreen: "home",
  };

  handleHomeLink = () => {
    this.setState({ renderedScreen: "home" });
  };

  handleSalesLink = () => {
    this.setState({ renderedScreen: "sales" });
  };

  handleStoreLink = () => {
    this.setState({ renderedScreen: "store" });
  };

  handleProductDetails = () => {
    this.setState({ renderedScreen: "product" });
  };

  render() {
    const rendersScreen = () => {
      switch (this.state.renderedScreen) {
        case "home":
          return (
            <Home
              renderSalesScreenProps={this.handleSalesLink}
              renderStoreScreenProps={this.handleStoreLink}
            />
          );
        case "store":
          return (
            <Store
              renderProductDetailsScreenProps={this.handleProductDetails}
            />
          );
        case "product":
          return <ProductDetails />;
        case "sales":
          return <CreateProductToSell />;
      }
    };

    return (
      <ComponentsContainer>
        <Navbar
          renderHomeScreenProps={this.handleHomeLink}
          renderBuyScreenProps={this.handleSalesLink}
          renderStoreScreenProps={this.handleStoreLink}
        />
        <ScreenComponents>{rendersScreen()}</ScreenComponents>
      </ComponentsContainer>
    );
  }
}