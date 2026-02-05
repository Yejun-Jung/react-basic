import React from 'react'

const MenuButton = ({id, label, color}) => {
    const handleClick = () => {
        console.log(label);
    }

    return (
        <button 
          onClick={handleClick} 
          style={{ backgroundColor: color, margin: '5px', color: 'white' }}
        >
          {id}. {label} ({color})
        </button>
    )
}

export default MenuButton