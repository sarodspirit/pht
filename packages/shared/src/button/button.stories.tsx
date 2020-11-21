import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: { control: 'text' },
    size: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} as Meta

const Template: Story = (args) => <Button {...args}>{args.children}</Button>

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  size: 'md',
  children: 'Button',
  disabled: false
}
export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  size: 'md',
  children: 'Button',
  disabled: false
}
