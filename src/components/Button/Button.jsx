import React from "react";
import PropTypes from 'prop-types';
import styles from './Button.module.css';

import classNames from "classnames";

const Button = ({text, onClick, color}) => {
    const setColor = (color) =>
    classNames(styles.collectionProducts__listButtons_button, {
      [styles.bgColor ]:
      color === "orange"
    });
    return(
        <button onClick={onClick} className={setColor(color)} type="button">{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string
};

Button.defaultProps = {
    color: 'gray'
};

export default Button;