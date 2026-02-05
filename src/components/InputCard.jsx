import React from 'react'

const InputCard = ({title, placeholder}) => {
    const handleChange = (e) => {
        console.log(e.target.value)
    }
  return (
    <div>
        <h1>{title}</h1>
        <input type="text" 
        placeholder={placeholder}
        onChange={handleChange}/>
    </div>
  )
}

export default InputCard