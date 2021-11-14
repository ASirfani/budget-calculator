import "./App.css";
import Alart from "./component/Alart";
import ExpenseFrom from "./component/ExpenseFrom";
import ExpensList from "./component/ExpenseList";
import { v4 as uuid_v4 } from "uuid";

import { useState ,useEffect } from "react";

// local storage of browser
const initailsExpens = localStorage.getItem("expends")? JSON.parse(localStorage.getItem("expends")) : [];

// const initailsExpens = [
//   { id: uuid_v4(), expens: "apple", price: 100 },
//   { id: uuid_v4(), expens: "apple + orange", price: 1100 },
//   { id: uuid_v4(), expens: "apple + car", price: 1020 },
//   { id: uuid_v4(), expens: "apple + home", price: 10120 },
// ];

function App() {
  // ***************** state **********************

  // expends state
  const [expends, setExpends] = useState(initailsExpens);
  // expens state
  const [expens, setExpens] = useState("");
  // price state
  const [price, setPrice] = useState("");
  // alert state
  const [alart, setAlart] = useState({ show: false });
  // edit itme state
  const [edit, setEdit] = useState(false);
  // edit id // getting the edit
  const [id, setId] = useState(0);

  // *************** functionality ********************
// effect on expends ract when changed
  useEffect(() => {
    localStorage.setItem("expends" , JSON.stringify(expends));
  }, [expends])

  //expens handler function
  const expensHandle = (e) => {
    setExpens(e.target.value);
  };

  // price handler function
  const priceHandle = (e) => {
    setPrice(e.target.value);
  };

  // alert handle function
  const alartHandle = ({ type, text }) => {
    setAlart({ show: true, type, text });
    setTimeout(() => {
      setAlart({ show: false });
    }, 3000);
  };

  // submit handler function
  const submitHandle = (e) => {
    e.preventDefault();
    if (expens !== null && price > 0) {
      if (edit) {
        let tempExpends = expends.map((item) => {
          return item.id === id ? { ...item, expens, price } : item;
        });

        setExpends(tempExpends);
        setEdit(false);
        alartHandle({type:"success", text:"the item is edited"});
      } else {
        const sigleExpens = { id: uuid_v4(), expens, price };
        setExpends([...expends, sigleExpens]);
        alartHandle({ type: "success", text: "item added" });
      }
      setPrice("");
      setExpens("");
    } else {
      alartHandle({
        type: "danger",
        text: "please check the price and changes is not be empty of invalid value",
      });
    }
  };

  // clean all item function
  const cleanAllhandle = () => {
    setExpends([]);
    alartHandle({type:"danger" , text:"all item cleaned"});
  };

  // delete item funtion
  const deleteItemHandle = (id) => {
    let tempExpends = expends.filter((item) => item.id !== id);
    setExpends(tempExpends);
    alartHandle({type:"danger", text:"The item has deleted"});
  };

  // edit item function
  const editItemHandle = (id) => {
    let tempExpends = expends.find((item) => item.id === id);
    let { expens, price } = tempExpends;

    setPrice(price);
    setExpens(expens);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alart && <Alart text={alart.text} type={alart.type} />}

      <h1>the Budget Calculator</h1>

      <div className="App">
        <ExpenseFrom
          expens={expens}
          expensHandle={expensHandle}
          price={price}
          priceHandle={priceHandle}
          submitHandle={submitHandle}
          edit={edit}
        />
        <ExpensList
          expends={expends}
          deleteItemHandle={deleteItemHandle}
          editItemHandle={editItemHandle}
          cleanAllhandle={cleanAllhandle}
        />
      </div>

      <h1>
        Total Spending:
        <span className="total">
          {expends.reduce((acc, cru) => {
            return (acc += parseInt(cru.price));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
