import * as React from 'react'
import classnames from 'classnames'

import { BtnType, BtnSize } from '../theme'
interface props {
  children: string
  size?: string
  type?: string
  disabled?: boolean
}
const Button: React.FC<props> = ({
  children,
  size = 'default',
  type = 'primary',
  disabled = false
}) => {
  const buttonTypeClasses = React.useMemo(() => BtnType(type), [type])
  const buttonSizeClasses = React.useMemo(() => BtnSize(size), [size])
  const className = classnames(buttonTypeClasses, buttonSizeClasses)
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
