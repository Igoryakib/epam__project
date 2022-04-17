import axios from "axios";

axios.defaults.baseURL = "https://61fed12aa58a4e00173c99ed.mockapi.io/phonebook";

const getProducts = () => {
   return axios.get('/products').then(res => res.data).catch(err => console.log(err));
};

const getBoughtProducts = () => {
    return axios.get('/boughtProducts').then(res => res.data).catch(err => console.log(err));
};

const addBoughtProduct = (credentials) => {
    return axios.post('/boughtProducts', credentials).then(res => res.data).catch(err => console.log(err))
};

const deleteBoughtProduct = (productId) => {
    return axios.delete('/boughtProducts', productId).then(res => res.data).catch(err => console.log(err))
};

export {getProducts, getBoughtProducts, addBoughtProduct, deleteBoughtProduct};