import { DataContext } from "contexts/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "customHooks/useForm";

const FirstView = () => {
  const navigator = useNavigate();
  const { setIncome } = useContext(DataContext);

  const addIncome = () => {
    if (!values) return;
    localStorage.setItem('income', JSON.stringify(values.income));
    setIncome(JSON.parse(localStorage.getItem('income')));
    navigator('/homepage');
  }

  const [values, error, handleChange, handleSubmit] = useForm(addIncome);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Expense Tracking</h1>
      {error && (
        <div className="alert alert-danger">
          Number is not correct!
        </div>
      )}
      <input className='form-control' name="income" type="text" placeholder='nhập số tiền cần quản lí' required onChange={handleChange} />
      <button className='btn btn-success w-100 mt-3'>Save</button>
    </form>
  )
}

export default FirstView;