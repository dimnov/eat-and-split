import Button from "./components/Button.jsx";

function FormSplitBill() {
 return (
  <form className="form-split-bill">
   <h2>Split a bill with blabla</h2>

   <label>💰 Bill value</label>
   <input type="text" />

   <label>🧍‍♂️ Your expense</label>
   <input type="text" />

   <label>🧑‍🤝‍🧑 blabla's expense</label>
   <input type="text" disabled />

   <label>🤑 Who is paying the bill</label>
   <select>
    <option value="user">You</option>
    <option value="friend">blabla</option>
   </select>

   <Button>Add</Button>
  </form>
 );
}

export default FormSplitBill;
