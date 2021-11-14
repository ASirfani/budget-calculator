import { MdSend} from "react-icons/md";

const ExpenseFrom = ({price, expens , expensHandle , priceHandle , submitHandle,edit}) => {
    return ( 
        <form onSubmit={submitHandle}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="expense">Charge</label>
                    <input onChange={expensHandle} value={expens} type="text" id="charge" name="charge" className="form-control" placeholder="e.g : rent" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Charge</label>
                    <input onChange={priceHandle} value={price} type="number" id="amount" name="amount" className="form-control" placeholder="e.g : 1239" />
                </div>
            </div>
            <button className="btn" type="submit">{edit ? "edit": "submit"} <MdSend/></button> 
        </form>
     );
}
 
export default ExpenseFrom;