import { DataContext } from "contexts/DataContext";
import React, { useContext } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from "react-router-dom";
import { formatNumber } from "utils/formatNumber";

const ExpenseItem = () => {
  const { expense, setExpense } = useContext(DataContext);
  const navigate = useNavigate();

  const handleEdit = (ex) => {
    navigate('/edit', { state: ex });
  }

  const handleDelete = (ex) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h3>Are you sure?</h3>
            <p>You want to delete {ex.name}?</p>
            <button className="btn btn-secondary me-2"
              onClick={onClose}>No
            </button>
            <button className="btn btn-primary"
              onClick={() => {
                setExpense(prev => {
                  const newExpense = prev.filter(p => p.id !== ex.id);
                  localStorage.setItem('expense', JSON.stringify(newExpense));
                  return newExpense;
                })
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    })
  }
  return (
    <div className="transaction">
      {expense && expense.map(ex => (
        <div
          className="transaction__item"
          key={ex.id}
        >
          <div className="transaction__item-name">{ex.name}</div>
          <div className="transaction__item-price">
            <span className='fs-5'>-{formatNumber(ex.income)} VNĐ</span>
            <small className='text-secondary text-end'>{ex.createdAt}</small>
          </div>
          <div className="transaction__item-control">
            <button className="btn sm btn-info me-2" onClick={() => handleEdit(ex)}>Edit</button>
            <button className="btn btn-danger" onClick={() => handleDelete(ex)}>Delete</button>
          </div>
        </div>
      ))}
      {expense.length === 0 && (
        <div className='expense-none'>Expense is empty</div>
      )}
    </div>
  );
}

export default ExpenseItem;