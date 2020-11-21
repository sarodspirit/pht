import * as React from 'react'

const ThemeContext = React.createContext({
  theme: undefined,
  setTheme: undefined
})
export type ColorKey = string
export type ColorValue = string | Record<string, string>
export interface Props {
  children: React.ReactNode
  theme: Record<ColorKey, ColorValue>
}
const setCssVariables = (record: Record<ColorKey, ColorValue>, parentKey='')=>{
  Object.keys(record).forEach((key: ColorKey) => {
    if(typeof record[key] === 'object') {
      setCssVariables(record[key] as Record<string, string>, `${key}-`)
    }else if(typeof record[key] === 'string'){
      document.documentElement.style.setProperty(`--${parentKey}${key}`, record[key] as string)
    }
  })
}
const ThemeProvider = ({ theme = {}, children }: Props) => {
  const [state, setState] = React.useState(theme)
  React.useEffect(() => {
    setCssVariables(state)
  }, [state])
  return (
    <ThemeContext.Provider value={{ theme: state, setTheme: setState }}>
      {children}
    </ThemeContext.Provider>
  )
}
const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context.theme === undefined)
    throw new Error('useTheme hook can only be used inside ThemeProvider')
  return context
}
export { useTheme, ThemeProvider }
