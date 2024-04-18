import Button from "./components/Button.jsx";

function FormSplitBill({ name }) {
 return (
  <form className="form-split-bill">
   <h2>Split a bill with {name}</h2>

   <label>💰 Bill value</label>
   <input type="text" />

   <label>🧍‍♂️ Your expense</label>
   <input type="text" />

   <label>🧑‍🤝‍🧑 {name}'s expense</label>
   <input type="text" disabled />

   <label>🤑 Who is paying the bill</label>
   <select>
    <option value="user">You</option>
    <option value="friend">{name}</option>
   </select>

   <Button>Add</Button>
  </form>
 );
}

export default FormSplitBill;
