'use client';

import React, { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, onClick, className, ...rest } = props;
  const btnClasses = clsx(styles['btn'], className);
  return (
    <button className={btnClasses} type="button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
