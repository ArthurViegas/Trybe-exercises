const convertValues = (expenses) => {
  const exchangedCurr = expenses.map((expense) => {
    const { exchangeRates, value } = expense;
    const currenciesObj = Object.values(exchangeRates);
    const thisCurr = expense.currency;
    const exchangeCurr = currenciesObj.find((curr) => curr.code === thisCurr);
    const { ask } = exchangeCurr;
    const converted = value * ask;
    return converted;
  });
  return exchangedCurr;
};

export default convertValues;
