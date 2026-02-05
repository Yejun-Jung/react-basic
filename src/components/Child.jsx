import React, {useEffect, useState} from 'react'

const Child = ({color}) => {
    const [msg, setMsg] = useState("")

    useEffect(() => {
        setMsg(`색상이 변경되었습니다. ${color}`)
    }, [color])
    
  return (
    <div>
        <p>현재 색상: <span style={{color : color}}>{color}</span></p>
        <p>{msg}</p>
    </div>
  )
}

export default Child