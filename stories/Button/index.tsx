import React from "react";
import { ButtonProps } from "./types";
import styles from './style.module.css';
import clsx from "clsx";
import TruncateMarkup from "react-truncate-markup";
import Counter from '../Counter';  // Adjust the import path as necessary

const Button = ({
  type,
  disabled,
  onClick,
  className,
  children,
  loading,
  focused,
  style,
  size,
  counter,
  quantity
}: ButtonProps): JSX.Element => {

  return (
    <button
      className={clsx(
        styles.button,
        className,
        { [styles.button__disabled]: disabled },
        { [styles.loading]: loading },
        { [styles.button__focused]: focused },
        { [styles[`button__${style}`]]: style },
        { [styles[`button__${size}`]]: size }
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <div className={styles.overlay}></div>
      <div className={clsx(styles.content, styles.container)}>
        <TruncateMarkup lines={1} ellipsis="...">
          <span>{children}</span>
        </TruncateMarkup>
        {counter && quantity && (
          <Counter 
            style={style === 'primary' ? 'primary' : 'secondary'} 
            size={size}
            quantity={quantity} 
            stroke={false} 
          />
        )}
      </div>
    </button>
  );
}

export default Button;
