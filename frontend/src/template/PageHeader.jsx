import React from 'react'

export default props => (
  <header className='page-header'>
    <h1 >{props.name} <small className='text-muted'>{props.small}</small></h1>
  </header>
)