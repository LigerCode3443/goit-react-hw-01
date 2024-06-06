import { FriendListItems } from "../FriendListItems/FriendListItems";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ name, avatar, id, isOnline }) => (
        <li key={id}>
          <FriendListItems name={name} image={avatar} status={isOnline} />
        </li>
      ))}
    </ul>
  );
};
