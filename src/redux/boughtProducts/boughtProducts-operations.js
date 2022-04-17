import {
  getBoughtProductRequest,
  getBoughtProductSuccess,
  getBoughtProductError,
  addBoughtProductRequest,
  addBoughtProductSuccess,
  addBoughtProductError,
  deleteBoughtProductRequest,
  deleteBoughtProductSuccess,
  deleteBoughtProductError,
} from "./boughtProducts-actions";
import {
  getBoughtProducts,
  addBoughtProduct,
  deleteBoughtProduct,
} from "../../utils/fetchApi";

const getAllBoughtProducts = () => (dispatch) => {
  dispatch(getBoughtProductRequest());
  getBoughtProducts()
    .then((res) => dispatch(getBoughtProductSuccess(res)))
    .catch((err) => dispatch(getBoughtProductError(err)));
};

const buyProduct = (credentials) => (dispatch) => {
  dispatch(addBoughtProductRequest());
  addBoughtProduct(credentials)
    .then((res) => dispatch(addBoughtProductSuccess(res)))
    .catch((err) => dispatch(addBoughtProductError(err)));
};

const deleteProduct = (productId) => (dispatch) => {
  dispatch(deleteBoughtProductRequest());
  deleteBoughtProduct(productId)
    .then((res) => dispatch(deleteBoughtProductSuccess(res)))
    .catch((err) => dispatch(deleteBoughtProductError(err)));
};

export {getAllBoughtProducts, buyProduct, deleteProduct}; 