import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import "../css/styles.css";

import { getAllProducts } from "../redux/products/products-operations";
import { getAllBoughtProducts } from "../redux/boughtProducts/boughtProducts-operations";
import {filterProductsByName, filterProductsByPrice} from '../redux/products/products-actions';
import { isLoading } from "../redux/selectors";

import Header from "./Header/Header";
import Button from "./Button/Button";
import ListProducts from "./ListProducts/ListProducts";
import Modal from "./ModalWindow/ModalWindow";
import ContentModal from "./ContentModal/ContentModal";
import Loader from "./Loader/Loader";

const App = ({ getProducts, getBoughtProducts, filterByName, filterByPrice, isLoading}) => {
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    getProducts();
    getBoughtProducts();
  }, []);
  return (
    <>
      <Header openModal={() => setIsModal(!isModal)} />
      <main>
        <section className="collectionProducts">
          <div className="collectionProducts__listButtons">
            <Button onClick={filterByName} text="Sort by Product Name" />
            <Button onClick={filterByPrice} text="Sort by Price" />
          </div>
          {isLoading ? <Loader/> : <ListProducts />}
          {isModal && (
            <Modal
              onClick={() => setIsModal(!isModal)}
            >
            <ContentModal closeModal={() => setIsModal(!isModal)}/>
            </Modal>
          )}
        </section>
      </main>
    </>
  );
};

App.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getBoughtProducts: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
  filterByPrice: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getAllProducts()),
  getBoughtProducts: () => dispatch(getAllBoughtProducts()),
  filterByName: () => dispatch(filterProductsByName()),
  filterByPrice: () => dispatch(filterProductsByPrice()),
});

const mapStateToProps = state => ({
  isLoading: isLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
