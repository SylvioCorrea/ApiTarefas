import React from 'react'
import MenuNavBar from './template/MenuNavbar'
import Routes from './Routes'

export default props => (
  <div>
    <MenuNavBar />
    <div className='container'><Routes /></div>
  </div>
)
