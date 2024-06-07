import profile from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={profile.box_profile}>
      <div className={profile.box_img}>
        <img src={image} alt="User avatar" className={profile.img_pro} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={profile.list}>
        <li className={profile.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={profile.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={profile.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
