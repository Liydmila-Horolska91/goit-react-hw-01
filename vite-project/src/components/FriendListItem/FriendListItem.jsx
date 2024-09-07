import css from "./FriendListItem.module.css";

function FriendListItem({ friend }) {
  return (
    <div>
      <img className={css.friendImg} src={friend.avatar} alt={friend.name} width="48" />
      <p className={css.friendName}>{friend.name}</p>
      {friend.isOnline ? (<p className={css.online}>Online</p>) : (<p className={css.offline}>Offline</p>)}
    </div>
  )
}

export default FriendListItem;