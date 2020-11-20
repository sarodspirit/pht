export const BtnType = (btnType: string) => {
  const btnTypes = {
    default: 'bg-white hover:bg-gray-700 text-gray-700 font-bold rounded disabled:opacity-50',
    primary: 'bg-primary hover:bg-accent text-white font-bold rounded disabled:opacity-50',
    secondary: 'bg-secondary hover:bg-accent text-white font-bold rounded disabled:opacity-50'
  }
  return (btnTypes[btnType] || btnTypes['default'])
}
export const BtnSize = (btnSize: string) => {
  const btnSizes = {
    sm: 'py-1 px-2 text-xs',
    lg: 'py-3 px-6 text-lg',
    default: 'py-2 px-4 text-sm'
  }
  return ( btnSizes[btnSize] || btnSizes['default'])
}
