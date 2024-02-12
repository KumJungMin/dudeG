'use client';
import React from 'react';
import Style from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  click?: () => void;
  className?: string;
}

export default function Button({
  children,
  click,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${Style['btn']} ${className}`}
      type="button"
      onClick={click}
    >
      {children}
    </button>
  );
}
