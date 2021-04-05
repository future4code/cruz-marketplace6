import React, { useContext, useState } from 'react'
import * as c from "./styles"
import { ProductContext } from "../../store/index"
import { createProduct, getAllProducts } from "../../services/api"

const initialValues = {
    name: "",
    description: "",
    price: "",
    paymentMethod: "",
    category: "",
    photos: [],
    installments: "",
};

export const RegisterProduct = () => {

    const [produtos, setProdutos] = useContext(ProductContext);
    const [values, setValues] = useState(initialValues);
    //const [photos, setPhotos] = useState([]);

    console.log(values);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === "photos"){
            setValues({
                ...values,
                photos: [value]
            })
            return null
        }
        setValues({
            ...values,
            [name]: value,
        });
    }

    const addProduct = () => {
        createProduct(values).then(() => {
            getAllProducts().then((res) => {
                setProdutos(res.data.products);
            })
        })
    }

    return (
        <>
            <c.ContainerRegister>
                <input name="name" onChange={handleInputChange} placeholder="Nome do produto" type="text" />
                <label>Descrição do Produto:</label>
                <textarea name="description" onChange={handleInputChange} rows="4" cols="50" />
                <input placeholder="Valor" name="price" onChange={handleInputChange} type="number" />
                <input placeholder="Método de Pagamento" name="paymentMethod" onChange={handleInputChange} type="text" />
                <c.Category name="category" onChange={handleInputChange} type="text">
                    <option value="homem">Categoria</option>
                    <option value="homem">homem</option>
                    <option value="mulher">mulher</option>
                    <option value="casa">casa</option>
                    <option value="eletrdomésticos">eletrdomésticos</option>
                </c.Category>
                <input placeholder="Foto do produto" onChange={handleInputChange} name="photos" type="text" />
                <input placeholder="Número máximo de parcelas" name="installments" onChange={handleInputChange} type="number" />
                <button onClick={() => addProduct(values)}>CADASTRAR PRODUTO</button>
            </c.ContainerRegister>
        </>
    )
}