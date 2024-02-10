'use client';
import React from 'react';
import Style from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  click: () => void;
}

export default function Button({ children, click }: ButtonProps): JSX.Element {
  return (
    <button className={Style['btn']} type="button" onClick={click}>
      {children}
    </button>
  );
}
