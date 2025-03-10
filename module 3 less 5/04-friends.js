const friends = [
  { name: 'Nazar', online: false },
  { name: 'Artem', online: true },
  { name: 'Ivan', online: false },
  { name: 'Vova', online: true },
  { name: 'Victoria', online: true },
];

console.table(friends);

// for (const friend of friends) {
//   console.log(friend.name);

//   friend.newprop = 555;
// }

// console.table(friends);

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return 'find';
    }
  }

  return 'not find';
};

// console.log(findFriendByName(friends, 'Nazar'));
// console.log(findFriendByName(friends, 'qwe'));

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }

  return names;
};

// console.log(getAllNames(friends));

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    // console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    // console.log(friend);
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

const getFriendsByOnline = function (allFriends) {
  const friendsStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsStatus.online.push(friend);
      continue;
    }

    friendsStatus.offline.push(friend);
  }

  return friendsStatus;
};

// console.log(getFriendsByOnline(friends));
