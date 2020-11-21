import * as React from 'react'

const ThemeContext = React.createContext({theme: {}, setTheme: undefined})

export interface Props {
  children: React.ReactNode
  theme: Record<string, string>
}
const ThemeProvider = ({ theme={}, children}:Props) => {
  const setTheme = (_theme: Partial<Map<string, string>>)=>{
        Object.keys(_theme).forEach((key:string)=>{
            document.documentElement.style.setProperty(`--${key}`, _theme[key])
        })
    }
    setTheme(theme)
  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}
const useTheme = (newTheme: Record<string, string>)=>{
    const {setTheme} = React.useContext(ThemeContext)
    setTheme(newTheme)
}
export { useTheme, ThemeProvider }