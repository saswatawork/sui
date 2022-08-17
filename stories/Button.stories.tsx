import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args}>Click Me</Button>
);

export const Default = Template.bind({});

Default.args = {};