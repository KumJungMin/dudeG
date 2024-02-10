'use client';
import React from 'react';
import Style from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps): JSX.Element {
  return (
    <button className={Style['btn']} type="button">
      {children}
    </button>
  );
}
