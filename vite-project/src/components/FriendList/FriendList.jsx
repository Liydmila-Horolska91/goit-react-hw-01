import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>{
      friends.map(friend =>
        <li className={css.friendCard} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      )}
    </ul>
  )
}

export default FriendList;