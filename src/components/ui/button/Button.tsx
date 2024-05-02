'use client';

import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  click?: () => void;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  click,
  style,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={styles['btn']}
      type="button"
      onClick={click}
      style={style}
    >
      {children}
    </button>
  );
}
