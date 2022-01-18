import { ADD_SUM_EXPENSIES, LOAD_CURRENCIES, SAVE_NEW_EXPENSE, REMOVE_EXPENSIES } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: [],
  expensesSum: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_NEW_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case LOAD_CURRENCIES:
    return {
      ...state,
      exchangeRates: action.payload,
    };
  case ADD_SUM_EXPENSIES:
    return {
      ...state,
      expensesSum: action.payload,
    };
  case REMOVE_EXPENSIES:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
