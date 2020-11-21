import React from 'react'
import { render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider, useTheme } from './useTheme'
const customRenderer = (
  ui: {},
  { providerProps }: { providerProps: { theme: { primary: string } } }
) => {
  return render(<ThemeProvider {...providerProps}>{ui}</ThemeProvider>)
}
test('Theme Provider should initially set css variables', () => {
  const setPropertyMock = jest.fn()
  document.documentElement.style.setProperty = setPropertyMock
  const providerProps = {
    theme: {
      primary: '#ffffff'
    }
  }
  customRenderer(<div></div>, { providerProps })
  expect(setPropertyMock).toHaveBeenCalledTimes(1)
  expect(setPropertyMock).toHaveBeenCalledWith('--primary', '#ffffff')
})
test('useTheme should throw error if used outside context', () => {
  const { result } = renderHook(() => useTheme())
  expect(() => {
    expect(result.current).not.toBe(undefined)
  }).toThrow(Error('useTheme hook can only be used inside ThemeProvider'))
})

test.each([
  [
    'string',
    {
      primary: '#ffffff'
    },
    [['--primary', '#ffffff']]
  ],
  [
    'object',
    {
      primary: {
        500: '#ffffff'
      }
    },
    [['--primary-500', '#ffffff']]
  ],
  [
    'mixed',
    {
      primary: {
        500: '#ffffff',
        '600':'#bbbbbb'
      },
      secondary:'#cccccc'
    },
    [['--primary-500', '#ffffff'],['--primary-600', '#bbbbbb'],['--secondary', '#cccccc']]
  ]
])('useTheme should set css variables with %s values', (_, theme, calls) => {
  const setPropertyMock = jest.fn()
  document.documentElement.style.setProperty = setPropertyMock

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={{}}>{children}</ThemeProvider>
  )
  const { result } = renderHook(() => useTheme(), { wrapper })
  act(() => {
    result.current.setTheme(theme)
  })
  calls.forEach((call) => {
    expect(setPropertyMock).toHaveBeenCalledWith(call[0], call[1])
  })
})
