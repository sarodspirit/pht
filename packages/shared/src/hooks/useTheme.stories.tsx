import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ThemeProvider } from './useTheme'
import Button from '../button/index'

export default {
  title: 'ThemeContext',
  component: ThemeProvider,
  argTypes: {
    'primary-500': { control: 'color' },
    'primary-700': { control: 'color' },
    'secondary-500': { control: 'color' },
    'secondary-700': { control: 'color' },
    'accent': { control: 'color' }
  }
} as Meta

const Template: Story = (args) => {
    console.log(args)
    const theme = {
        primary:{
            500: args['primary-500'],
            700: args['primary-700'],
        },
        secondary:{
            500: args['secondary-500'],
            700: args['secondary-700'],
        },
        accent:args['accent']
    }
    return (
  <ThemeProvider theme={theme}>
    <div>
      <Button color={'primary'}>Primary</Button>
      <Button color={'secondary'}>secondary</Button>
      <Button color={'accent'}>accent</Button>
    </div>
  </ThemeProvider>
)
}
export const ThemeSwitcher = Template.bind({})
ThemeSwitcher.args = {
  'primary-500': '#367ee9',
  'primary-700': '#0D53A5',
  'secondary-500':'#E28A4A',
  'secondary-700':'#79431C',
  accent: '#718096'
}
