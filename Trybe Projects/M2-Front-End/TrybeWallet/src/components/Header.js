import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/css/header.css';

class Header extends React.Component {

  formatMonetaryValue(strOrNumber) {
    return `${Number(strOrNumber).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  }

  render() {
    const { userEmail, totalExpenses } = this.props;
    const currency = 'BRL';
    const despesas = this.formatMonetaryValue(totalExpenses);
    const teste = () => {
      if (totalExpenses.length === 0) {
        console.log('oioio');
      };
      return `Despesas: ${despesas || 0}`
    }

    return (
      <header className="header-section">
        {console.log(totalExpenses.toString())}
        <div className="page-title">
          <h1> TrybeWallet </h1>
        </div>
        <div className="user-infos">
          <p
            data-testid="email-field"
            className="email-field"
          >
            {`Email: ${userEmail}`}
          </p>
          <div className="spending-field">
            <p data-testid="total-field">{ teste() }</p>
            <p data-testid="header-currency-field">
              {
                currency
              }
            </p>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.expensesSum,
});

export default connect(mapStateToProps, null)(Header);
