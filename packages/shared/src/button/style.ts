const sizeStyles = (btnSize: string) => {
  const btnSizes = {
    sm: 'py-1 px-2 text-xs',
    lg: 'py-3 px-6 text-lg',
    default: 'py-2 px-4 text-sm'
  }
  return ( btnSizes[btnSize] || btnSizes['default'])
}
const buttonStyles = (color: string = 'primary', size: string = 'default')=>{
  const btnFilled =`bg-${color}-500 hover:shadow-md active:bg-${color}-700 outline-none focus:outline-none uppercase text-white font-bold rounded disabled:opacity-50`
  const btnSize = sizeStyles(size)
  const btnOutlined = `text-${color}-500 bg-transparent border border-solid border-${color}-500 hover:bg-${color}-500 hover:text-white active:bg-${color}-600 font-bold uppercase rounded outline-none focus:outline-none disabled:opacity-50` 
  const btnLink = `text-${color}-500 background-transparent font-bold uppercase  outline-none focus:outline-none disabled:opacity-50`
  return {btnFilled, btnSize, btnOutlined, btnLink}

}
export default buttonStyles