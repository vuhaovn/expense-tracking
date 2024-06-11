const { createContext, useState } = require("react");

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [income, setIncome] = useState(() => {
    const initIncome = JSON.parse(localStorage.getItem('income')) || 0;
    return initIncome;
  });
  const [expense, setExpense] = useState(() => {
    const initExpense = JSON.parse(localStorage.getItem('expense')) || [];
    return initExpense;
  });

  return (
    <DataContext.Provider value={{ income, setIncome, expense, setExpense }}>
      {props.children}
    </DataContext.Provider>
  )
}