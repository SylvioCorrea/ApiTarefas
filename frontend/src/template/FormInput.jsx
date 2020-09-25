import React from 'react'

export default props => (
  <div className="col-12 col-lg-10">
    <input {...props.input} name={props.name}
      className='form-control'
      type='text'
      placeholder={props.placeholder}/>
  </div>
)