import {
  getProductsRequest,
  getProductSuccess,
  getProductError,
} from "./products-actions";

import { getProducts } from "../../utils/fetchApi";

const getAllProducts = () => (dispatch) => {
  dispatch(getProductsRequest());
  getProducts()
    .then((data) => dispatch(getProductSuccess(data)))
    .catch((err) => dispatch(getProductError(err)));
};

export { getAllProducts };
