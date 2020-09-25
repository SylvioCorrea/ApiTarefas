import React from 'react'

function conditionalRenderSubmit(hasSubmit) {
  if(hasSubmit) {
    return (
      <button type='submit' className='btn btn-success mr-1' >
        <i className='fa fa-plus' />
      </button>
    ) 
  } else {
    return null
  }
}

export default props => (
  <div className='col-12 col-lg-2'>
    {conditionalRenderSubmit(props.hasSubmit)}
    <button type='button' className='btn btn-info mr-1'
      onClick={props.onSearch}>
      <i className='fa fa-search' />
    </button>
    <button type='button' className='btn btn-secondary mr-1'
      onClick={props.onClear}>
      <i className='fa fa-times' />
    </button>
  </div>
)