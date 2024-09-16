import "./App.css";
import userData from "./Data/userData.json";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./Data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./Data/transactions.json";

const App = () => {
  return (
    <div className="app">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items ={transactions} />
    </div>
  );
};

export default App;