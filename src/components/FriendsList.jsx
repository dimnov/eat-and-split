import Friend from "./Friend.jsx";

function FriendsList({ initialFriends }) {
 const friends = initialFriends;

 console.log(friends);
 return (
  <ul>
   {friends.map((friend) => (
    <Friend friend={friend} key={friend.id} />
   ))}
  </ul>
 );
}

export default FriendsList;
