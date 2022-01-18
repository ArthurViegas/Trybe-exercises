import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import '../assets/css/spendingTable.css';
import { saveExpense, removeExpense } from '../actions';
// FONTE: Consultei o repositório do Davi Soares T15 B, para realizar parte do requisito, adaptei sua lógica de implementação e utilizei as funções de conversão
// LINK: https://github.com/tryber/sd-015-b-project-trybewallet/commit/5919b5cf9bc0b8d2196c486f81a24d9c9a5a333f

class SpendigsTable extends React.Component {

  formatMonetaryValue(strOrNumber) {
    return `${Number(strOrNumber)
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  }

  convertToBRL(exchangeRates, currency, value) {
    const currenciesObj = Object.values(exchangeRates);
    const findExchangeRate = currenciesObj.find((find) => find.code === currency);

    return (findExchangeRate.ask * value);
  }

  findCurrency(exchangeRates, currency) {
    const currenciesObj = Object.values(exchangeRates);
    const findExchangeRate = currenciesObj.find((find) => find.code === currency);
    const exchangeRate = this.formatMonetaryValue(findExchangeRate.ask);

    return exchangeRate;
  }

  usedCurrency(currency, exchangeRates) {
    const currName = exchangeRates[currency].name;
    return currName.split('/')[0];
  }

  deleteButton(id) {
    const { expenses, removeExpense } = this.props;
    const teste = expenses.filter((expense) => expense.id !== id)
    removeExpense(teste);
    console.log(teste );
  }

  rederExpenseRow(expense) {
    const { id, description, tag, method, value, currency, exchangeRates } = expense;
    const valueToReal = `${Number(value)
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    return (
      <tr key={ id }>
        <td>{ valueToReal }</td>
        <td>
          Real
        </td>
        <td>
          { this.formatMonetaryValue(
            this.convertToBRL(exchangeRates, currency, value),
          ) }
        </td>
        <td>{ this.usedCurrency(currency, exchangeRates) }</td>
        <td>{ this.findCurrency(exchangeRates, currency) }</td>
        <td>{ method }</td>
        <td>{ tag }</td>
        <td>{ description }</td>
        <button
          type="button"
          onClick={() => this.deleteButton(id)}
        >
          Remover
        </button>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="table-styles">
        <table cellPadding="2px px" cellSpacing="2">
          <TableHeader />
          <tbody>
            { expenses.map((expense) => this.rederExpenseRow(expense)) }
          </tbody>
        </table>
      </div>
    );
  }
}

SpendigsTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (state) => dispatch(saveExpense(state)),
  removeExpense: (state) => dispatch(removeExpense(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(SpendigsTable);
