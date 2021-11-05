import React from "react";
import EmailInput from "./EmailInput";
import SenhaInput from "./SenhaInput";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleInputs = this.handleInputs.bind(this)

    this.state = {
      email: '',
      senha: ''
    };
  }

  handleInputs({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value
    })
    }
  
  render() {
    return (
      <form className='form-div'>
        <h1>LOGIN</h1>
        <EmailInput value={this.state.email} handleInputs={this.handleInputs} />
        <SenhaInput value={this.state.senha} handleInputs={this.handleInputs} />
        <button type='submit'>Entrar</button>
      </form>
    );
  }
}

export default LoginForm;
