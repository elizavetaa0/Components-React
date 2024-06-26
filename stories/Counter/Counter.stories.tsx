import { StoryObj, Meta } from '@storybook/react';
import Counter from '.';
import { CounterSize, CounterStyle } from './types';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    style: {
      name: 'style',
      options: Object.values(CounterStyle),
      mapping: Object.values(CounterStyle),
      control: {
        type: 'select',
        labels: Object.keys(CounterStyle),
      },
      description: 'Counter styles'
    },
    size: {
      name: 'size',
      options: Object.values(CounterSize),
      mapping: Object.values(CounterSize),
      control: {
        type: 'select',
        labels: Object.keys(CounterSize),
      },
      description: 'Counter sizes'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    stroke: false,
    pulse: false,
    quantity: '1',
    style: CounterStyle.primary,
    size: CounterSize.large
  }
}