import AddExpense from 'components/AddExpense';
import FirstView from 'pages/FirstView';
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from 'pages/HomePage';
import EditExpense from 'components/EditExpense';
import AddIncome from 'components/AddIncome';
import { useContext } from 'react';
import { DataContext } from 'contexts/DataContext';

function App() {
  const { income } = useContext(DataContext);
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={
          income > 0 ? (
            <HomePage />
          ) : (
            <FirstView />
          )
        } />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit" element={<EditExpense />} />
        <Route path="/add-income" element={<AddIncome />} />
      </Routes>
    </div>
  );
}

export default App;
