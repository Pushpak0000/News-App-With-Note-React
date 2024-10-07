import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status" style={{width: '20rem', height: '20rem'}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default Loading
