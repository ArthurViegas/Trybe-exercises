// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';
export const SAVE_NEW_EXPENSE = 'SAVE_NEW_EXPENSE';
export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const ADD_SUM_EXPENSIES = 'ADD_SUM_EXPENSIES';
export const REMOVE_EXPENSIES = 'REMOVE_EXPENSIES';

export const saveEmail = (payload) => ({ type: SAVE_USER, payload });
export const saveExpense = (payload) => ({ type: SAVE_NEW_EXPENSE, payload });
export const loadCurrencies = (payload) => ({ type: LOAD_CURRENCIES, payload });
export const sumExpensies = (payload) => ({ type: ADD_SUM_EXPENSIES, payload });
export const removeExpense= (payload) => ({ type: REMOVE_EXPENSIES, payload });
