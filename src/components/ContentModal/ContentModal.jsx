import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ListBoughtProducts from "../ListBoughtProducts/ListBoughtProducts";
import { deleteProduct } from "../../redux/boughtProducts/boughtProducts-operations";
import { getBoughtProducts } from "../../redux/boughtProducts/boughtProducts-selectors";

import Button from "../Button/Button";
import cross from "../../img/cross.png";
import styles from "./ContentModal.module.css";

const ContentModal = ({ closeModal, boughtProducts, clearBasket }) => {
  const clearProductsBasket = (arrayProducts) => {
    arrayProducts.map((item) => clearBasket(item.id));
  };
  return (
    <>
      <button onClick={closeModal} className={styles.closeBtn}>
        <img src={cross} alt="cross" />
      </button>
      <div>
        <h2 className={styles.titleModal}>Your Cart</h2>
        <ListBoughtProducts />
        <h4 className={styles.titleModal}>
          Total: &#36;
          {boughtProducts.reduce((acc, item) => {
            return (acc += item.price);
          }, 0)}
        </h4>
        <Button
          onClick={() => clearProductsBasket(boughtProducts)}
          text="Clear Cart"
          color="orange"
        />
      </div>
    </>
  );
};

ContentModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  boughtProducts: getBoughtProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearBasket: (productId) => dispatch(deleteProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentModal);
