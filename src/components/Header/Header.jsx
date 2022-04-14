import React from "react";

import styles from './Header.module.css';
const Header = () => {
    return(
        <header className={styles.headerBackground}>
        <div className={styles.headerContent}>
            <h1 className={styles.headerContent__title}> <a className={styles.headerContent__title} href="#">gadg<span
                        className={styles.headerContent__title_element}>et</span></a></h1>
            <button className={styles.headerContent__counterShopping}>
                <h3 className={styles.counterShopping__title}>cart</h3>
                <div className={styles.counterShopping__backgroundElem}>
                        <span className={styles.counterShopping__elem1}>0</span>
                </div>
            </button>
        </div>
    </header>
    );
};

export default Header;