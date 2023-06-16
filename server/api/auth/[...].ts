import { NuxtAuthHandler } from "#auth";
export default NuxtAuthHandler({
  secret: useRuntimeConfig().auth.AUTH_SECRET,
  debug: false,
  callbacks: {
    jwt: async ({ token, user, account }) => {
      
      return Promise.resolve('');
    },
    session: async ({ session, token }) => {
      
      return Promise.resolve('');
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    {
      id: "111",
      name: "111",
      type: "oauth",
      authorization: {
        url: useRuntimeConfig().auth.AUTHORIZE_URI,
        params: {
          scope: useRuntimeConfig().auth.SCOPE,
        },
      },
      token: {
        url: useRuntimeConfig().auth.TOKEN_URI,
      },
      userinfo: {
        request: async (data) => {
          const response = await fetch(
            useRuntimeConfig().auth.USER_INFO_URI || "",
            {
              headers: {
                Authorization: `${data.tokens.token_type} ${data.tokens.access_token}`,
              },
              method: "GET",
            }
          );
          const userinfo = await response.json();
          return userinfo;
        },
      },
      clientId: useRuntimeConfig().auth.CLIENT_ID,
      idToken: false,
      clientSecret: useRuntimeConfig().auth.CLIENT_SECRET,
      profile(profile, tokens) {
        return {
          
        };
      },
    },
  ],
});
