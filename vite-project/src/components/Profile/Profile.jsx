import React from "react";
import styles from "./profile.module.css";

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

export default Profile;