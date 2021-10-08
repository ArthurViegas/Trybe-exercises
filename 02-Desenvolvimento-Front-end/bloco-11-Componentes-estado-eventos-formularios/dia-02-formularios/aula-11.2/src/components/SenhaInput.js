import React from 'react'

class SenhaInput extends React.Component {
  render() {
    const {value, handleInputs} = this.props
    return (
      <label><strong>Senha:</strong>
        <input 
        value={value} 
        onChange={handleInputs}  
        name='senha' type='password' placeholder='Digite sua senha'></input>
      </label>
    )
  }
}

export default SenhaInput
