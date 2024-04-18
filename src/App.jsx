import { useState } from "react";
import FormSplitBill from "./FormSplitBill.jsx";
import Button from "./components/Button.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import FriendsList from "./components/FriendsList.jsx";

const initialFriends = [
 {
  id: 118836,
  name: "Clark",
  image: "https://i.pravatar.cc/48?u=118836",
  balance: -7,
 },
 {
  id: 933372,
  name: "Sarah",
  image: "https://i.pravatar.cc/48?u=933372",
  balance: 20,
 },
 {
  id: 499476,
  name: "Anthony",
  image: "https://i.pravatar.cc/48?u=499476",
  balance: 0,
 },
];

function App() {
 const [showAddFriend, setShowAddFriend] = useState(false);
 const [friends, setFriends] = useState(initialFriends);

 function handleShowAddFriend() {
  setShowAddFriend((show) => !show);
 }

 function handleAddFriend(newFriend) {
  setFriends([...friends, newFriend]);
 }

 function handleAddFriend(newFriend) {
  setFriends((friends) => [...friends, newFriend]);
  setShowAddFriend(false);
 }

 return (
  <div className="app">
   <div className="sidebar">
    <FriendsList friends={friends} />
    {showAddFriend && (
     <FormAddFriend
      onClick={handleShowAddFriend}
      onAddFriend={handleAddFriend}
     />
    )}
    <Button onClick={handleShowAddFriend}>
     {showAddFriend ? "Close" : "Add friend"}
    </Button>
   </div>

   <FormSplitBill />
  </div>
 );
}

export default App;
