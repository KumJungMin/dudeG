'use client';

import React from 'react';
import Style from './Button.module.scss';

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
      className={Style['btn']}
      type="button"
      onClick={click}
      style={style}
    >
      {children}
    </button>
  );
}
