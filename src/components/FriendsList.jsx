import Friend from "./Friend.jsx";

function FriendsList({ friends, handleSelectFriend, selectedFriend }) {
 return (
  <ul>
   {friends.map((friend) => (
    <Friend
     friend={friend}
     key={friend.id}
     selectedFriend={selectedFriend}
     onSelection={handleSelectFriend}
    />
   ))}
  </ul>
 );
}

export default FriendsList;
