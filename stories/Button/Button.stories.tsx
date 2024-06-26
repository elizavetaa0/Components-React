import { StoryObj, Meta } from '@storybook/react';
import Button from '.';
import { ButtonSize, ButtonStyle, ButtonType } from './types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    style: {
      name: 'style',
      options: Object.values(ButtonStyle),
      mapping: Object.values(ButtonStyle),
      control: {
        type: 'select',
        labels: Object.keys(ButtonStyle),
      },
      description: 'Button styles'
    },
    size: {
      name: 'style',
      options: Object.values(ButtonSize),
      mapping: Object.values(ButtonSize),
      control: {
        type: 'select',
        labels: Object.keys(ButtonSize),
      },
      description: 'Button sizes'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: ButtonType.button,
    enabled: true,
    disabled: false,
    children: "Что сделать",
    loading: false,
    counter: false,
    focused: false,
    style: ButtonStyle.primary,
    size: ButtonSize.large
  }
}


export const Loading: Story = {
  args: {
    type: ButtonType.button,
    disabled: false,
    loading: true,
    counter: false,
    style: ButtonStyle.primary,
    size: ButtonSize.large
  }
}

export const Focused: Story = {
  args: {
    type: ButtonType.button,
    enabled: true,
    disabled: false,
    children: "Что сделать",
    counter: false,
    focused: true,
    style: ButtonStyle.primary,
    size: ButtonSize.large
  }
}

export const ButtonWithCounter: Story = {
  args: {
    type: ButtonType.button,
    enabled: true,
    disabled: false,
    children: "Что сделать",
    counter: true,
    style: ButtonStyle.primary,
    size: ButtonSize.large,
    quantity: '1',
    
  }
}
