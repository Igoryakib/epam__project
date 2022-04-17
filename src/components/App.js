import React, {useEffect} from "react";
import { connect } from "react-redux";

import '../css/styles.css';

import { getAllProducts } from "../redux/products/products-operations";
import { getAllBoughtProducts } from "../redux/boughtProducts/boughtProducts-operations";

import Header from "./Header/Header";
import Button from "./Button/Button";
import ListProducts from "./ListProducts/ListProducts";
import Modal from "./ModalWindow/ModalWindow";

const App = ({getProducts, getBoughtProducts}) => {
    useEffect(() => {
        getProducts();
        getBoughtProducts();
    }, [])
    return(
        <>
            <Header/>
            <main>
                <section className="collectionProducts">
                    <div className='collectionProducts__listButtons'>
                    <Button text="Sort by Product Name" />
                    <Button text="Sort by Price"/>
                    </div>
                    <ListProducts/>
                </section>
                <Modal/>
            </main>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(getAllProducts()),
    getBoughtProducts: () => dispatch(getAllBoughtProducts()),
})

export default connect(null, mapDispatchToProps)(App);