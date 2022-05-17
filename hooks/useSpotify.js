import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

function useSpotify() {
  const { data: session } = useSession();
  const data = useSession();
  console.log(data);
  useEffect(() => {
    if (session) {
      // if token is expired
      if (session.error === 'token_expired') {
        // direct to login page
        signIn();
      }
      console.log(session.accessToken, 'session');
      const token = spotifyApi.getAccessToken();
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);
  return spotifyApi;
}

export default useSpotify;
