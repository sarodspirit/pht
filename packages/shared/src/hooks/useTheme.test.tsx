import React from 'react'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider , useTheme } from './useTheme'
const customRenderer = (ui: {}, { providerProps }: { providerProps: { theme: { primary: string } } })=>{
    return render (<ThemeProvider {...providerProps}>{ui}</ThemeProvider>)
}
test('Theme Provider should initially set css variables',()=>{
    const setPropertyMock = jest.fn();
    document.documentElement.style.setProperty = setPropertyMock;
    const providerProps = {
        theme:{
            'primary':'#ffffff'
        }
    }
    customRenderer(<div></div>, {providerProps})
    expect(setPropertyMock).toHaveBeenCalledTimes(1)
    expect(setPropertyMock).toHaveBeenCalledWith('--primary','#ffffff')
})
test('useTheme should set css variables',()=>{
    const setPropertyMock = jest.fn();
    document.documentElement.style.setProperty = setPropertyMock;

    const wrapper = ({ children }: {children:React.ReactNode}) => <ThemeProvider theme={{}}>{children}</ThemeProvider>
    const theme = {
        'primary':'#aaaaaa',
        'secondary':'#bbbbb'
    }

    renderHook(() => useTheme(theme), {wrapper})
    expect(setPropertyMock).toHaveBeenCalledTimes(2)
    expect(setPropertyMock).toHaveBeenCalledWith('--primary','#aaaaaa')
    expect(setPropertyMock).toHaveBeenCalledWith('--secondary','#bbbbb')

})