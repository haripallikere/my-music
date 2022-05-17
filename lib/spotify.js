import { env } from 'process';
import SpotifyWebApi from 'spotify-web-api-node';
import { URLSearchParams } from 'url';

const scopes = [
  'user-read-email',
  'user-read-private',
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'streaming',
].join(',');

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = 'https://account.spotify.com/authorize?' + queryParamString;

const spotifyApi = new URLSearchParams({
  clientId: process.env.SPOTIFY_PUBLIC_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_PUBLIC_CLIENT_SECRET,
});

export { spotifyApi };
export { LOGIN_URL };
