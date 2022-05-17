const clientID = 'd564e8e0dfab48f08ddd13ad2129d49c';
const clientSecret = '8aa2edfecaaa4dd2989a318cc29caab2';
const redirectURI = 'http://localhost:3000/';
const apiUrl = 'https://account.spotify.com/authorize';
const scope = [
  'user-read-email',
  'user-read-private',
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
];

let url = apiUrl;
url += '&client_id=' + encodeURIComponent(clientID);
url += '&redirect_uri=' + encodeURIComponent(redirectURI);
url += '&scope=' + encodeURIComponent(scope);
url += '&response_type=token&show_dialog=true';

export default url;
