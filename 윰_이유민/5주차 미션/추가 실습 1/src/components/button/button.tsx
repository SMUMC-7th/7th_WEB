import React, { ButtonHTMLAttributes } from 'react';

// export enum ButtonColor {
//   WHITE = '#0000',

// }

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: string;
  backgroundColor: string;
  borderTop?: boolean;
  borderRadius?: string;
  ypadding: string;
  //onClick: () => void;
}

// interface IButton extends PropsWithChildren {
//   color?: string;
// }

// interface IInput extends InputHTMLAttributes<HTMLInputElement> {
//   text: string;
// }

function Button({
  children,
  backgroundColor,
  color,
  borderTop,
  borderRadius,
  ypadding,
  ...props
}: IButton) {
  return (
    <button
      {...props}
      style={{
        width: '100%',
        padding: `10px ${ypadding}`,
        color: color,
        backgroundColor: backgroundColor,
        border: backgroundColor === 'white' ? '1px solid gray' : 'none',
        borderTopLeftRadius: borderTop ? borderRadius : '',
        borderTopRightRadius: borderTop ? borderRadius : '',
        borderRadius: !borderTop ? borderRadius : '',
      }}
    >
      {children}
    </button>
  );
}

export { Button };
