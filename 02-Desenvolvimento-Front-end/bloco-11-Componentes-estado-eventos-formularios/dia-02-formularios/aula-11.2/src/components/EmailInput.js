import React from 'react'

class EmailInput extends React.Component {
  render() {
    const {value, handleInputs} = this.props
    return(
      <label> <strong> E-Mail:</strong>
      <input 
      value={value}  
      onChange={handleInputs}
      name='email'type='text' placeholder='Digite seu E-mail'></input>
      </label>
    )
  }
}

export default EmailInput