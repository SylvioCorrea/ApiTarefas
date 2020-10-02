import React from 'react'
import ErrorAlert from './components/ErrorAlert'
import Routes from './Routes'


const App = props => {
  return (
    <div>
      <ErrorAlert/>
      <div className='container shadow'><Routes /></div>
    </div>
  )
}

export default App