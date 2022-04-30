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
  changeAmountProductsRequest,
  changeAmountProductsSuccess,
  changeAmountProductsError,
} from "./boughtProducts-actions";
import {
  getBoughtProducts,
  addBoughtProduct,
  deleteBoughtProduct,
  changeAmountProductsApi
} from "../../utils/fetchApi";

const getAllBoughtProducts = () => (dispatch) => {
  dispatch(getBoughtProductRequest());
  getBoughtProducts()
    .then((res) => dispatch(getBoughtProductSuccess(res)))
    .catch((err) => dispatch(getBoughtProductError(err.message)));
};

const buyProduct = (credentials) => (dispatch) => {
  dispatch(addBoughtProductRequest());
  addBoughtProduct(credentials)
    .then((res) => dispatch(addBoughtProductSuccess(res)))
    .catch((err) => dispatch(addBoughtProductError(err.message)));
};

const deleteProduct = (productId) => (dispatch) => {
  dispatch(deleteBoughtProductRequest());
  deleteBoughtProduct(productId)
    .then((res) => {
      dispatch(deleteBoughtProductSuccess(res.id));
    })
    .catch((err) => {
      dispatch(deleteBoughtProductError(err.message));
    });
};

const changeAmountProduct = (productId, credentials) => (dispatch) => {
  dispatch(changeAmountProductsRequest());
  changeAmountProductsApi(productId, credentials).then((res) => {
    dispatch(changeAmountProductsSuccess(res));
  })
  .catch((err) => {
    dispatch(changeAmountProductsError(err.message));
  });
};

export { getAllBoughtProducts, buyProduct, deleteProduct, changeAmountProduct };
