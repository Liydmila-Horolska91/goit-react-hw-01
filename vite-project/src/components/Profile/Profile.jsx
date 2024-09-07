import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileCard}>
      <div className={css.profileDescription}>
        <img className={css.profileImg} src={image} alt={name} />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStat}>
          <span className={css.statTitle}>Followers</span>
          <span className={css.statText}>{stats.followers}</span>
        </li>
        <li className={css.profileStat}>
          <span className={css.statTitle}>Views</span>
          <span className={css.statText}>{stats.views}</span>
        </li>
        <li className={css.profileStat}>
          <span className={css.statTitle}>Likes</span>
          <span className={css.statText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile;