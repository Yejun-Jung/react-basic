import React from 'react'

const Main = ({content='기본 컨텐츠', bgColor}) => {
  return (
    <div>
        <div style={{
            backgroundColor:bgColor,
            padding:'20px',
            marginBottom:'20px'
            }}>
        {content}
        </div>
    </div>
  )
}

export default Main