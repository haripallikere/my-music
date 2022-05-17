import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/github';
import { spotifyApi } from '../../lib/spotify';
import { LOGIN_URL } from '../../lib/spotify';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_PUBLIC_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async JWT({ token, user, account }) {
      console.log(token);
    },
  },
});
