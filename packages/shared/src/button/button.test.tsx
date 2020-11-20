import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './index'

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button>My Button</Button>)
    expect(screen.getByRole('button')).toMatchInlineSnapshot(`
      <button
        class="bg-primary hover:bg-accent text-white font-bold rounded disabled:opacity-50 py-2 px-4 text-sm"
        style="transition: all .15s ease;"
        type="button"
      >
        My Button
      </button>
    `)
  })
})
