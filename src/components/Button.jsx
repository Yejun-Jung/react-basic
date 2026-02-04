import React from 'react'

const Button = ({text, color='gray', children=null}) => {
  console.log(text, color)
  return (
    <div style={{color:color}}>
      {text} - {color.toUpperCase()}
      <div>
      {children}
      </div>
    </div>
  )
}

export default Button