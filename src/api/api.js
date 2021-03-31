import axios from 'axios';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedThree/products';

export const createProduct = async (body) => {
    try{
        return await axios.post(baseUrl,body)

    } catch(er){
        console.log(er)
    }

}
