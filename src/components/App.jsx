import React from 'react';
import Profile from "./Profile/Card";
import Statistics from './Statistics/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Tranzactions/Tranzactions';


import user from "../../src/user.json";
import stats from "../../src/data.json";
import friends from "../../src/friends.json";
import transactions from "../../src/transactions.json";

export const App = () => {
  console.log(user);
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
