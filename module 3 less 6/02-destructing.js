// const playlist = {
//   name: 'my playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount)

// const { rating, tracks, name, trackCount: numberOfTracs = 0, author = 'user' } = playlist;

// console.log(name, rating, tracks, numberOfTracs, author);

// const profile = {
//   name: 'Nazar',
//   tag: 'jgluke',
//   location: 'Kiev',
//   avatar: 'https//s3.anazon.com',
//   stats: {
//     followers: 5632,
//     views: 1977,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

const rgb = [255, 100, 80];

const [a, b, c] = rgb;

// console.log(a, b, c);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

for (const [name, rating] of entries) {
  //   const [name, rating] = entry;
  //   const name = entry[0];
  //   const rating = entry[1];
  //   console.log(name, rating);
}

// const profile = {
//   name: 'Nazar',
//   tag: 'jgluke',
//   location: 'Kiev',
//   avatar: 'https//s3.anazon.com',
//   stats: {
//     followers: 5632,
//     views: 1977,
//     likes: 1308,
//   },
// };

const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);

const profile = {
  name: 'Nazar',
  tag: 'jgluke',
  location: 'Kiev',
  avatar: 'https//s3.anazon.com',
  stats: {
    followers: 5632,
    views: 1977,
    likes: 1308,
  },
};

const showProfileInfo = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  console.log(name, tag, location, avatar, followers, views, likes);
};

showProfileInfo(profile);
