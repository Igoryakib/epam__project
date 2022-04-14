import React from "react";

import styles from './Button.module.css';

const Button = ({text, onClick}) => {
    return(
        <button onClick={onClick} class={styles.collectionProducts__listButtons_button} type="button">{text}</button>
    );
};

export default Button;