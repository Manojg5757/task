
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"



function App() {
  const [date,setDate] =useState("")
  const[amount,setAmount] =useState("");
  const[payment,setPayment]=useState("")
  const[remark,setRemark] = useState("");

  const[list,setList] = useState([]);
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(date,amount,payment,remark)
    const data = {date,amount,payment,remark}
    if(date,amount,payment,remark){
      setList((ls)=>[...ls,data])
      setDate("");
      setAmount("")
      setRemark("")
    }
  }



 return (
  <div>
    <h1>React</h1>
    <form onSubmit={handleSubmit} className="form-box">
    <div className='inform'>
    <label htmlFor="">Date:
    <input type="date" name='date' value={date} onChange={(e) =>{setDate(e.target.value) }} style={{width:'200px'}}/>
    </label>
    <br />
    <label htmlFor="">Amount:
    <input type="number" name="amount" placeholder='Amount' value={amount} onChange={(e) => {setAmount(e.target.value)}} style={{width:'200px'}}/>
    </label>
    <br />
    <label htmlFor="">Payment:
    <select style={{width:'200px'}} name="payment" id="list" value={payment} onChange={(e) => {setPayment(e.target.value)}}>
      <option>cash</option>
      <option>Card</option>
      <option>UPI</option>
    </select></label><br />
    <label htmlFor="">Remarks:
    <input type="text" name="remark" placeholder='remark' value={remark} onChange={(e) => {setRemark(e.target.value)}} style={{width:'200px'}}/>
    </label>
    <br />
    </div>
    <div className='buttons'>
    <button>Cancel</button>
    <button>Submit</button>
    </div>
    </form>
    {
      list.map((a) =><div>
        <table className='table bordered'>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>{a.date}</td>
            <td>{a.amount}</td>
            <td>{a.payment}</td>
            <td>{a.remark}</td>
          </tr>
        </table>
      </div>)
    }
  </div>
 )
}

export default App;
