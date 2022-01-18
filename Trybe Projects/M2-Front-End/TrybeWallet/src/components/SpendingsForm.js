import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCurrencies, saveExpense, sumExpensies } from '../actions';
import requestCurrency from '../helpers/requestAPI';
import { categories, paymentMethod } from '../helpers/payment';
import convertValues from '../helpers/conversor';
import '../assets/css/spendingForm.css';

class SpendigForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
      currNames: [],
      totalSpendings: 0,
    };
    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.setCurrNames = this.setCurrNames.bind(this);
    this.sumValues = this.sumValues.bind(this);
  }

  async componentDidMount() {
    const allCurrencies = await requestCurrency();
    this.setCurrNames(allCurrencies);
  }

  setCurrNames(moedas) {
    const currenciesName = Object.keys(moedas)
      .filter((currencyFilter) => currencyFilter !== 'USDT');

    this.setState({ currNames: currenciesName });
  }

  sumValues() {
    const { totalExpenses, sumExpensies: allExpensies } = this.props;
    const convertedValues = convertValues(totalExpenses);
    const sum = convertedValues.reduce((prev, curr) => prev + curr);
console.log(sum);
    this.setState({
      totalSpendings: sum,
      value: '',
    });
    allExpensies(sum);
  }

  ///      Handlers      ///

  async handleSubmit() {
    const { id, value, currency, method, tag, description } = this.state;
    const { addExpenses } = this.props;
    const currRequest = await requestCurrency();

    const newRegister = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: currRequest,
    };
    addExpenses(newRegister);
    this.setState((previousId) => ({ id: previousId.id + 1 }));

    this.sumValues();
    this.saveStorage();
  }

  handleInputChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveStorage() {
    const { totalExpenses } = this.props;
    if (totalExpenses !== []) {
      localStorage.setItem('user', JSON.stringify(totalExpenses));
    }
  }

  ///      Form Fields      ///

  spendigInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value-input">
        Valor:
        <input
          name="value"
          value={ value }
          onChange={ this.handleInputChanges }
          type="number"
          placeholder="R$: Valor gasto."
          data-testid="value-input"
          id="value-input"
          required
        />
      </label>
    );
  }

  currencyInput() {
    const { currNames } = this.state;
    return (
      <label htmlFor="currency-input">
        Moeda:
        <select
          data-testid="currency-input"
          id="currency-input"
          onChange={ this.handleInputChanges }
          name="currency"
        >
          {currNames.map((currencyName) => (
            <option
              key={ currencyName }
              data-testid={ currencyName }
              value={ currencyName }
            >
              {currencyName}
            </option>
          ))}
        </select>
      </label>
    );
  }

  paymentInput() {
    return (
      <label htmlFor="payment-input">
        Metodo de pagamento:
        <select
          data-testid="method-input"
          id="payment-input"
          onChange={ this.handleInputChanges }
          name="method"
        >
          {paymentMethod.map((payment) => (
            <option
              key={ payment }
              data-testid={ payment }
              value={ payment }
            >
              {payment}
            </option>
          ))}
        </select>
      </label>
    );
  }

  tagInput() {
    return (
      <label htmlFor="tag-input">
        Tag:
        <select
          data-testid="tag-input"
          id="tag-input"
          onChange={ this.handleInputChanges }
          name="tag"
        >
          {categories.map((categorie) => (
            <option
              key={ categorie }
              data-testid={ categorie }
              value={ categorie }
            >
              {categorie}
            </option>
          ))}
        </select>
      </label>
    );
  }

  descriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description-input">
        Descrição:
        <input
          type="text"
          placeholder="Mercado, roupa, farm..."
          data-testid="description-input"
          id="value-input"
          name="description"
          value={ description }
          onChange={ this.handleInputChanges }
        />
      </label>
    );
  }

  render() {
    const { exchangeRates, totalSpendings } = this.state;
    return (
      <section className="form-section">
        <form
          onSubmit={ (event) => {
            event.preventDefault();
            this.handleSubmit(exchangeRates, totalSpendings);
          } }
        >
          { this.spendigInput() }
          { this.currencyInput() }
          { this.paymentInput() }
          { this.tagInput() }
          { this.descriptionInput() }
          <button type="submit">
            Adicionar
          </button>
        </form>
      </section>
    );
  }
}

SpendigForm.propTypes = {
  addExpenses: PropTypes.func.isRequired,
  totalExpenses: PropTypes.func.isRequired,
  sumExpensies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  totalExpenses: state.wallet.expenses,
  currencies: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (state) => dispatch(saveExpense(state)),
  loadCurrencie: (state) => dispatch(loadCurrencies(state)),
  sumExpensies: (state) => dispatch(sumExpensies(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpendigForm);
