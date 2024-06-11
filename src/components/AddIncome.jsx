import { DataContext } from "contexts/DataContext";
import useForm from "customHooks/useForm";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatNumber } from "utils/formatNumber";

const AddIncome = () => {
  const { income, setIncome } = useContext(DataContext);
  const navigate = useNavigate();

  const addIncome = () => {
    setIncome(prevIncome => {
      const newIncome = parseInt(prevIncome) + parseInt(values.income);
      localStorage.setItem('income', JSON.stringify(newIncome));
      return newIncome;
    });
    navigate('/homepage');
  }

  const [values, error, handleChange, handleSubmit] = useForm(addIncome);
  return (
    <div className="box addForm">
      <Link to='/homepage' className='btn btn-success mb-2'>Back</Link>
      <hr />
      <h1>Add Income</h1>
      <p>Current income: <span className="badge bg-danger fs-3 fw-bold">{formatNumber(income)}</span></p>
      {error && (
        <div className="alert alert-danger">
          Number is not correct!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="">Money number</label>
          <input type="text" name="income" onChange={handleChange} className="form-control" required />
        </div>
        <button className="btn btn-primary w-100">Save</button>
      </form>
    </div>
  )
}

export default AddIncome;