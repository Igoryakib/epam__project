import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { connect } from "react-redux";

import styles from './Product.module.css';

import Button from "../Button/Button";

import {buyProduct} from '../../redux/boughtProducts/boughtProducts-operations';

const Product = ({name, price, img, width, addBoughtProduct, id}) => {
    const addWidthImg = (width) => (classNames(styles.card__img, {
        [styles.card__img__width1]: width === 300,
        [styles.card__img__width2]: width === 200
    }))
    const addProduct = () => {
        const productObj = {
            name,
            price,
            amount: 1,
            img,
            id,
        };
        addBoughtProduct(productObj)
    };
    return(
        <li className={styles.collectionProducts__card}>
        <img className={addWidthImg(width)} src={img} alt={name}/>
        <h2 className={styles.card__title}>{name}</h2>
        <div className={styles.card__listInformation}>
            <Button onClick={addProduct} text="Add to Cart"/>
            <p className={styles.card__price}>&#36;{price}</p>
        </div>
    </li>
    );
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    addBoughtProduct: PropTypes.func.isRequired
};

const mapStateToProps = (dispatch) => ({
    addBoughtProduct: (productObj) => (dispatch(buyProduct(productObj))),
});

export default connect(null, mapStateToProps)(Product);