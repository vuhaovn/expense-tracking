import React, { useContext } from "react";
import useForm from "customHooks/useForm";
import { DataContext } from "contexts/DataContext";
import { Link, useNavigate } from "react-router-dom";


const randomId = () => {
  return Math.round(Math.random() * 99999 + 10000)
}

const formatDate = () => {
  const date = new Date();
  return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
}

const AddExpense = () => {
  const navigate = useNavigate();
  const { setExpense } = useContext(DataContext);
  const addExpense = () => {
    const newExpense = {
      ...values,
      id: randomId(),
      createdAt: formatDate()
    }
    setExpense(prev => {
      localStorage.setItem('expense', JSON.stringify([newExpense, ...prev]));
      return [newExpense, ...prev]
    })
    navigate('/homepage');
  }

  const [values, error, handleChange, handleSubmit] = useForm(addExpense)
  console.log('values', values);
  return (
    <div className="box addForm">
      <Link to='/homepage' className='btn btn-success mb-2'>Back</Link>
      <hr />
      <h1>Add Expense</h1>
      {error && (
        <div className="alert alert-danger">
          Number is not correct!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="">Name</label>
          <input type="text" name="name" onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Price</label>
          <input type="text" name="income" onChange={handleChange} className="form-control" required />
        </div>
        <button className="btn btn-primary w-100">Save</button>
      </form>
    </div>
  )
}

export default AddExpense;