import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import spotifyApi from '../../../lib/spotify';
import { LOGIN_URL } from '../../../lib/spotify';

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log(refreshToken);
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch {
    console.error(error);
    return {
      ...token,
      error: 'token_expired',
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
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
      //initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at * 1000,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
        };
      }
      // checks if access token is expired
      if (Date.now() < token.accessTokenExpires) {
        console.log('token is not expired');
        return token;
      } else {
        console.log('token is expired');
        return refreshAccessToken(token);
      }
    },

    async session({ session, token }) {
      session.user.username = token.user;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.error = token.error;
      return session;
    },
  },
});
