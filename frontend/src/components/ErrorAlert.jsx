import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import {removeAlert} from '../redux/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ErrorAlert = props => {
  let alert = null
  if(props.alerts.length) {
    alert =
      <SweetAlert
        error
        openAnim={false}
        title='Erro'
        onConfirm={props.removeAlert}
        confirmBtnBsStyle='secondary'>
        {renderErrors(props.alerts)}
      </SweetAlert>
  }
  return alert
}

const renderErrors = errors => (
  errors.map( (err, i) => (
    <div key={i} className='alert alert-danger'>
      <h6 className='alert-hreading'>
        {err.message}
      </h6>
      <hr />
      {err.errorText}
    </div>
  ))
)

const mapStateToProps = state => ({alerts: state.alerts})
const mapDispatchToProps = dispatch => bindActionCreators(
  {removeAlert}, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert)