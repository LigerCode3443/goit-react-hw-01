import { Profile, FriendList, TransactionHistory } from "components";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions .json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
