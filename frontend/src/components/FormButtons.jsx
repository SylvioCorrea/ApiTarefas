import React from 'react'

const FormButtons = props => {
  
  let submitButton
  let searchButton
  if (props.hasPost) {
    submitButton = <FormButton type='submit' color='success' faIcon='plus'/>
    searchButton = <FormButton type='button' color='info' faIcon='search' onClick={props.onSearch}/>
  } else {
    submitButton = <FormButton type='submit' color='info' faIcon='search'/>
    searchButton = null
  }

  return (
    <div className='col-12 col-lg-2 mb-2'>
      {submitButton}
      {searchButton}
      <FormButton type='button' color='secondary' 
        faIcon='times' onClick={props.onClear}/>
    </div>
  )
}

const FormButton = props => (
  <button type={props.type} className={`btn btn-${props.color} mr-1`}
    onClick={props.onClick}>
    <i className={`fa fa-${props.faIcon}`} />
  </button>
)

export default FormButtons
