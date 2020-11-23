import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} as Meta

const Template: Story = (args) => <Button {...args}>{args.children}</Button>

export const Filled = Template.bind({})
Filled.args = {
  color: 'primary',
  size: 'md',
  children: 'Button',
  disabled: false
}
export const Outlined = Template.bind({})
Outlined.args = {
  color: 'primary',
  size: 'md',
  children: 'Button',
  outlined: true,
  disabled: false
}
export const Link = Template.bind({})
Link.args = {
  color: 'primary',
  size: 'md',
  children: 'Button',
  disabled:false,
  link:true
}
