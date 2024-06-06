export const FriendListItems = ({ name, image, status }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{status ? "online" : "offline"}</p>
    </div>
  );
};
