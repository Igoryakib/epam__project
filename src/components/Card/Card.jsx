import React from "react";

import styles from './Card.module.css';

import Button from "../Button/Button";

import img from '../../img/product-1.jpg'

const Card = () => {
    return(
        <div class={styles.collectionProducts__card}>
        <img class={styles.card__img} src={img} alt=""/>
        <h2 class={styles.card__title}>Google Pixel 3 XL</h2>
        <div class={styles.card__listInformation}>
            <Button text="Add to Cart"/>
            <p class={styles.card__price}>&#36;648</p>
        </div>
    </div>
    );
};

export default Card;