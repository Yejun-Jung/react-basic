import React, { useState } from 'react'

const Exam3 = () => {
  const [text, setText] = useState("123456");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const onClickDel = ()=> {
    setText('')
  }

  return (
    <div>
      <h1>연습문제 실습</h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
      />
      <button onClick={onClickDel}>클릭하면 글씨 사라짐</button>
      
      <p>네가 한말: {text}</p>
    </div>
  )
}

export default Exam3