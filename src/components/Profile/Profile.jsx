import styles from "./Profile.module.css";
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div className={styles.profile__wrapper}>
        <img src={image} alt="User avatar" className={styles.profile__avatar} />
        <p className={styles.profile__name}>{name}</p>
        <p className={styles.profile__tag}>@{tag}</p>
        <p className={styles.profile__location}>{location}</p>
      </div>

      <ul className={styles.profile__stats}>
        <li>
          <span className={styles.profile__label}>Followers</span>
          <span className={styles.profile__quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.profile__label}>Views</span>
          <span className={styles.profile__quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.profile__label}>Likes</span>
          <span className={styles.profile__quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};


export default Profile;