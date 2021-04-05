import React, { useContext, useState } from 'react'
import CardHome from '../../components/Product/CardHome'
import { HomeContainer } from "./styles"
import { ProductContext } from "../../store/index"
import { CartContext } from "../../store/index"
import { FilterContainer } from "./styles";

function Home() {

    const [cart, setCart, addCarrinho] = useContext(CartContext);
    const [filter, setFilter] = useState('tudo');
    const [produtos, setProdutos] = useContext(ProductContext);

    /* const addCarrinho = (obj) => {
        setCart([...cart, obj]);
    }  */

    const changeFilter = (string) => {
        setFilter(string);
        console.log(string);
    }

    const filterProducts = produtos.filter((i) => {
        switch (filter) {
            case 'tudo':
                return i;
            case 'mulher':
                return i.category === 'mulher';
            case 'rapazes':
                return i.category === 'homem';
            case 'kids':
                return i.category === 'kids';
            default:
                return i.category === 'casa';
        }
    })

    const printProducts = filterProducts.map((i) => {
        return <CardHome key={Math.random().toString(36).substr(2, 10)} product={i} addItem={() => addCarrinho(i, i.id, cart, setCart)} />;
    })

    return (
        <>
            <FilterContainer>
                <ul>
                    <li filter={filter} onClick={() => changeFilter('tudo')}>tudo</li>
                    <li onClick={() => changeFilter('mulher')}>mulher</li>
                    <li onClick={() => changeFilter('rapazes')}>homem</li>
                    <li onClick={() => changeFilter('kids')}>casa</li>
                    <li onClick={() => changeFilter('casa')}>jardim</li>
                </ul>
            </FilterContainer>
            <HomeContainer>
                {printProducts}
            </HomeContainer>
        </>
    )
}

export default Home
