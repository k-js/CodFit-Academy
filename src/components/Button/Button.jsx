import React from 'react'
import S from './Button.module.css'

const Button = ({ text, onclick, color }) => {
  const cores = {
    preto: {
      
      backgroundColor: 'transparent',
      color: '#3d4449'
    },
    amarelo: {
      color: '#3d4449',
      backgroundColor: 'trans'
    }
  }
  return (
    <button
      className={S.btn}
      style={cores[color]}
      onClick={onclick}>{text}</button>
  )
}

export default Button