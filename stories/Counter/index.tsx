import React from 'react';
import { CounterProps } from './types';
import styles from './style.module.css';
import clsx from 'clsx';

const Counter = ({
  style,
  size,
  stroke,
  quantity
}: CounterProps): JSX.Element => {

  const isXsmallOrSmall = size === 'xsmall' || size === 'small';
  if (Number(quantity) > 99) {
    quantity = '99+';
  }
  if (quantity.length > 3) {
    quantity = quantity.substring(0, 3);
  }

  return (
    <div
      className={clsx(
        styles.counter,
        { [styles[`counter__${size}`]]: size },
        { [styles[`counter__${style}`]]: style },
        { [styles[`counter__${stroke}`]]: stroke },
        { [styles['counter__pulsating']]: isXsmallOrSmall }
      )}
    >
      {isXsmallOrSmall && (
        <>
          <div className={styles[`counter__pulse_${style}`]}></div>
          <div className={styles[`counter__pulse-dot_${style}`]}></div>
        </>
      )}
      <p
        className={clsx(
          styles.counter__text,
          { [styles[`counter__text_${size}`]]: size }
        )}
      >
        {quantity}
      </p>
    </div>
  );
}

export default Counter;
