import React from "react";
import { connect } from "react-redux";

import styles from './ListProducts.module.css';
import Product from "../Product/Product";
import { getProducts } from "../../redux/products/products-selectors";

const ListProducts = ({products}) => {
    return(
        <ul className={styles.collectionProducts__listProducts}>
            {products.map(item => {
                return(
                    <Product key={item.id} width={item.width} title={item.name} price={item.price} img={item.image}/>
                );
            })}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    products: getProducts(state),
});

export default connect(mapStateToProps)(ListProducts);