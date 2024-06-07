import { FriendListItems } from "../FriendListItems/FriendListItems";

import friend_css from "./FriendList.module.css";
export const FriendList = ({ friends }) => {
  return (
    <ul className={friend_css.list_friend}>
      {friends.map(({ name, avatar, id, isOnline }) => (
        <li key={id} className={friend_css.item_friend}>
          <FriendListItems name={name} image={avatar} status={isOnline} />
        </li>
      ))}
    </ul>
  );
};
