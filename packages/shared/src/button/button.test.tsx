import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

import Button from './index'

describe('Button', () => {
  test('Button component renders correctly', () => {
    render(<Button>My Button</Button>)
    expect(screen.getByRole('button')).toMatchInlineSnapshot(`
      <button
        class="bg-primary hover:bg-blue-600 text-white font-bold rounded disabled:opacity-50 py-2 px-4 text-sm"
        style="transition: all .15s ease;"
        type="button"
      >
        My Button
      </button>
    `)
  })
  test('Button has no accessibility violations', async () => {
    const { container } = render(<Button>My Button</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
