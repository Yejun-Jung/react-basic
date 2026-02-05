import React from 'react'

const PostItem = ({id, title, author}) => {
  return (
    <div>{id}-{title}-{author}</div>
  )
}

export default PostItem