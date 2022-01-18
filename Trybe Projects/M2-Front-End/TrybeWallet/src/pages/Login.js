import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';
import '../assets/css/loginPage.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
    };
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.verifyButton();
  }

  componentDidUpdate() {
    this.verifyButton();
  }

  verifyButton() {
    const button = document.querySelector('button');
    button.disabled = true;
    const checkEmail = this.verifyEmail();
    const checkPass = this.verifyPassword();
    if (checkEmail && checkPass) {
      button.disabled = false;
    }
  }

  verifyEmail() {
    const { userEmail } = this.state;
    // validação REGEX simplificada de email, fonte: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const validationRegex = /\S+@\S+\.\S+/;
    const validation = validationRegex.test(userEmail);
    return validation;
  }

  verifyPassword() {
    const { userPassword } = this.state;
    const minimumLength = 6;
    const passLangth = userPassword.length;
    if (passLangth >= minimumLength) {
      return true;
    }
    return false;
  }

  handleInputChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { saveUser, history } = this.props;
    const { userEmail } = this.state;
    event.preventDefault();
    saveUser(userEmail);
    history.push('./carteira');
  }

  render() {
    const { userPassword, userEmail } = this.state;

    return (
      <div id="main-div">
        <form
          id="form-sec"
          onSubmit={ this.handleSubmit }
          className="form-sec"
        >
          <h1> TRYWALLET </h1>
          <label htmlFor="userEmail">
            <input
              data-testid="email-input"
              name="userEmail"
              type="email"
              placeholder="Digite seu Email"
              value={ userEmail }
              onChange={ this.handleInputChanges }
              required
            />
          </label>
          <label htmlFor="userPassword">
            <input
              data-testid="password-input"
              type="password"
              name="userPassword"
              placeholder="Digite sua senha"
              value={ userPassword }
              onChange={ this.handleInputChanges }
              required
            />
          </label>
          <button
            id="submit-button"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUser: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
