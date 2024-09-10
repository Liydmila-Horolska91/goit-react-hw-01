import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import userData from "./Data/userData.json";
import Profile from "./components/Profile/profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./Data/friends.json";
import TransactionHistory from "./components/TransactionHistory/transactionHistory.jsx";
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
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

// import FriendList from "./components/friendList";
// import friends from "./friends.json";

// const App = () => {
//   return (
//     <div className="app">
//       <FriendList friends={friends} />
//     </div>
//   );
// };