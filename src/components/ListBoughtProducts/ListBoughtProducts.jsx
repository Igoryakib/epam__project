import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


import { getBoughtProducts } from "../../redux/boughtProducts/boughtProducts-selectors";
import { deleteProduct, changeAmountProduct, getAllBoughtProducts } from "../../redux/boughtProducts/boughtProducts-operations";
import {changeAmountProductsError} from '../../redux/boughtProducts/boughtProducts-actions';

import arrow from "../../img/arrow.png";
import bin from "../../img/bin.png";
import styles from "./ListBoughtProducts.module.css";

const ListBoughtProducts = ({ boughtProducts, deleteBoughtProduct, changeAmountBoughtProducts, sendErrorChangeAmount }) => {
  const increaseAmountProducts = (arrayProducts, productId) => {
    const {price, amount, name, img, id} = arrayProducts.find(item => +item.id === +productId);
    const changedProduct = {
      name,
      img,
      id,
      price: price + price,
      amount: amount + 1
    }
    changeAmountBoughtProducts(productId, changedProduct);
    getAllBoughtProducts();
  };
  const decreaseAmountProducts = (arrayProducts, productId) => {
    const {price, amount, name, img, id} = arrayProducts.find(item => +item.id === +productId);
      const changedProduct = {
        name,
        img,
        id,
        price: price - (price / 2),
        amount: amount - 1
      }
      if (amount === 1) {
        return sendErrorChangeAmount('Impossible, because amount is 1');
      } 
      changeAmountBoughtProducts(productId, changedProduct);
      getAllBoughtProducts();
  };
  return (
    <ul className={styles.contentModal}>
      {boughtProducts?.map((item) => {
        return (
          <li className={styles.itemProduct} key={item.id}>
            <img className={styles.cardImg} src={item.img} alt={item.title} />
            <div className={styles.wrapperTitles}>
              <h3 className={styles.productTitle}>{item.name}</h3>
              <p className={styles.productSubtitle}>&#36;{item.price}</p>
            </div>
            <div>
              <button onClick={() => increaseAmountProducts(boughtProducts, item.id)} type="button" className={styles.arrowBtn}>
                <img src={arrow} alt="arrow" />
              </button>
              <h4 className={styles.amountProducts}>{item.amount}</h4>
              <button onClick={() => decreaseAmountProducts(boughtProducts, item.id)} type="button" className={styles.arrowRotate}>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
            <button type="button" onClick={() => deleteBoughtProduct(item.id)}>
              <img src={bin} alt="bin" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ListBoughtProducts.propTypes = {
  boughtProducts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  boughtProducts: getBoughtProducts(state),
});

const mapDispatchToProps = dispatch => ({
    deleteBoughtProduct: (productId) => dispatch(deleteProduct(productId)),
    changeAmountBoughtProducts: (productId, productObj) => dispatch(changeAmountProduct(productId, productObj)),
    getBoughtProducts: () => dispatch(getAllBoughtProducts()),
    sendErrorChangeAmount: (textError) => dispatch(changeAmountProductsError(textError))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBoughtProducts);
