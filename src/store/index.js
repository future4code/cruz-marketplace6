import React, { useState, createContext, useEffect } from "react";
import { getAllProducts } from "../services/api";

export const ProductContext = createContext();
export const CartContext = createContext();

export const ProductProvider = ({ children }) => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) => {
            setProdutos(res.data.products);
        })
    }, [])

    return (
        <ProductContext.Provider value={[produtos, setProdutos]}>
            {children}
        </ProductContext.Provider>
    )
}

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);

    const addItemCart = (item, id, getCart, setcart) => {   
        const cart = getCart;
        const setCart = setcart;
        for (let i = 0; i < cart.length; i++) {
            if (id === cart[i].produto.id) {
                cart[i].qtd += 1;
                cart[i].subTotal = cart[i].produto.price * cart[i].qtd;
                setSubTotal(subTotal + item.price);
                setTotal(total + 1);
                setCart([...cart]);
                return null;
            }
        }

        const newProduct = {
            produto: item,
            qtd: 1,
            subTotal: item.price,
        }
        setTotal(total + 1);
        setSubTotal(subTotal + item.price);
        setCart([...cart, newProduct]);
    }

    const rmItemCat = (key) => {
        if (cart[key].qtd > 1) {
            cart[key].qtd -= 1;
            cart[key].subTotal = cart[key].produto.price * cart[key].qtd;
            setSubTotal(subTotal - cart[key].produto.price);
            setCart([...cart]);
        } else {
            const filtrados = cart.filter((item) => {
                cart[key].qtd = 0
                setSubTotal(subTotal - cart[key].produto.price);
                return item.qtd >= 1;
            })
            setCart([...filtrados]);
        }
    }

    return (
        <CartContext.Provider value={[cart, setCart, addItemCart, rmItemCat, subTotal, total]}>
            {children}
        </CartContext.Provider>
    )
}
