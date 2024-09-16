import PropTypes from 'prop-types';
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friend}>
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        width="48"
        className={styles.friend__avatar}
      />
      <p className={styles.friend__name}>{name}</p>
      <p
        className={`${styles.friend__status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
