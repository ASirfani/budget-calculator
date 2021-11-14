import { MdModeEdit, MdOutlineDelete } from "react-icons/md";

const ExpenseItem = ({ expend, editItemHandle, deleteItemHandle }) => {
  const { id, expens, price } = expend;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expens}</span>
        <span className="amount">${price}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          onClick={() => {editItemHandle(id)}}
        >
          <MdModeEdit />
        </button>
        <button className="clear-btn" onClick={() => {deleteItemHandle(id)}}>
          <MdOutlineDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
