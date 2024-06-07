import css from "./FriendListItems.module.css";
import clsx from "clsx";

export const FriendListItems = ({ name, image, status }) => {
  return (
    <>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p className={clsx(css.text, status ? css.green : css.red)}>
        {status ? "online" : "offline"}
      </p>
    </>
  );
};
