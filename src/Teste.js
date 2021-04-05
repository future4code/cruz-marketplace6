import React, { useContext } from 'react'
import { ProductContext } from "./store" 

const Teste = () => {
    const value = useContext(ProductContext);
    console.log(value);

    return (
        <div>
            teste
        </div>
    )
}

export default Teste;