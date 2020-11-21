import * as React from 'react'

const ThemeContext = React.createContext({theme: undefined, setTheme: undefined})

export interface Props {
  children: React.ReactNode
  theme: Record<string, string>
}
const ThemeProvider = ({ theme={}, children}:Props) => {
  const [state, setState] = React.useState(theme)
  React.useEffect(()=>{
    Object.keys(state).forEach((key:string)=>{
      document.documentElement.style.setProperty(`--${key}`, state[key])
  })
  },[state])
  return <ThemeContext.Provider value={{theme:state, setTheme:setState}}>{children}</ThemeContext.Provider>
}
const useTheme = ()=>{
    const context =   React.useContext(ThemeContext)
    if(context.theme === undefined) throw new Error('useTheme hook can only be used inside ThemeProvider')
    return context
}
export { useTheme, ThemeProvider }