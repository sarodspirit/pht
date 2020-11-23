import * as React from 'react'
import classnames from 'classnames'

import BtnStyles from './style'
interface props {
  children: string
  size?: string
  color?: string
  disabled?: boolean
  outlined?: boolean
  link?: boolean
}
const Button: React.FC<props> = ({
  children,
  size = 'default',
  color = 'primary',
  outlined = false,
  link = false,
  disabled = false

}) => {
  const classes = React.useMemo(() => BtnStyles(color, size), [color]) 
  const className = classnames(
    { [classes.btnFilled]: (!outlined && !link) },
    { [classes.btnOutlined]: outlined },
    { [classes.btnLink]: link },
    classes.btnSize
  )
  return (
    <button
      disabled={disabled}
      className={className}
      type='button'
      style={{ transition: 'all .15s ease' }}
    >
      {children}
    </button>
  )
}

export default Button
