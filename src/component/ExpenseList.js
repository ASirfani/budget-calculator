import ExpenseItem from "./ExpenseItem";
import { MdDeleteForever } from "react-icons/md";

const ExpensList = ({expends , editItemHandle, deleteItemHandle , cleanAllhandle}) => {
  return (
    <>
      <ul className="list">
        {expends.map((expend) => {
        
          return <ExpenseItem key={expend.id} expend={expend} editItemHandle={editItemHandle} deleteItemHandle={deleteItemHandle} />;
        })}
      </ul>
      {expends.length > 0 && <button className="btn" onClick={cleanAllhandle} >  Remove All <MdDeleteForever className="btn-icon" /></button>}
    </>
  );
};

export default ExpensList;
