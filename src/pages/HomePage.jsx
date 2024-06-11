import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from 'contexts/DataContext';
import ExpenseItem from 'components/ExpenseItem';
import { formatNumber } from 'utils/formatNumber';

const HomePage = () => {
  const { income, expense } = useContext(DataContext);
  const totalExpense = expense.length === 0 ? 0 : '-' + expense.reduce((sum, cur) => sum + parseInt(cur.income), 0)
  const balance = income - Math.abs(parseInt(totalExpense));
  return (
    <>
      <div className="box homepage">
        <div className="d-flex justify-content-end">
          <Link to='/add-income' className='btn btn-success mb-2'>Add income</Link>
        </div>
        <hr />
        <div className="">
          <div className="income">Income<span className='fs-4 text-success'>{formatNumber(income)} VNĐ</span></div>
          <div className="balance">Balance<span className='fs-4 text-primary'>{formatNumber(balance)} VNĐ</span></div>
          <div className="expense">Expense<span className='fs-4 text-danger'>{formatNumber(totalExpense)} VNĐ</span></div>
        </div>
        <hr />
        <ExpenseItem />
        <hr />
        <Link to='/add' className='btn btn-primary w-100'>Add expense</Link>
      </div>
    </>
  )
}

export default HomePage;