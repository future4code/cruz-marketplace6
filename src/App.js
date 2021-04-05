import React, { useState } from "react";
import Navbar from "./components/NavBar";
import { CartProvider, ProductProvider } from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home/index";
import { RegisterProduct } from "./Pages/RegisterProduct"; 

function App() {

  const [page, setPage] = useState('home');

  /* const [produtos, setProdutos] = useContext(LuluContext);
  console.log(produtos); */

  return (
    <Router>
      <ProductProvider className="App">
        <CartProvider>
          <Navbar setPage={setPage} page={page} />
          {page === "home" ? <Home /> : <RegisterProduct />}
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;

