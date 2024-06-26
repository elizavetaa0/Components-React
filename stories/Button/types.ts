import { ReactNode } from 'react';

export type ButtonProps = {
  type?: ButtonType;
  loading?: boolean;
  counter?: boolean;
  disabled?: boolean;
  enabled?: boolean;
  focused?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  style: ButtonStyle;
  size: ButtonSize;
  quantity?: string;
  stroke?: boolean;
};

export enum ButtonType {
  button = 'button'
}

export enum ButtonStyle {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}
