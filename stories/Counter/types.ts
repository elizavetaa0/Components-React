export type CounterProps = {
  style: CounterStyle;
  size: CounterSize;
  stroke: boolean;
  quantity: string;
  pulse: boolean;
}

export enum CounterStyle {
	primary = 'primary',
	secondary = 'secondary'
}

export enum CounterSize {
	xsmall = 'xsmall',
	small = 'small',
	medium = 'medium',
  large = 'large',
  xlarge = 'xlarge'
}