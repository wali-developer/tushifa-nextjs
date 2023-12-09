import startDbConnection from "@/libs/db";
import UserModal from "@/models/userModel";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await startDbConnection();

        const user = await UserModal.findOne({ email });
        if (!user) throw Error("Email or password incorrect!");

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) throw Error("Email or password incorrect!");

        return {
          name: user.name,
          email: user.name,
          role: user.role,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const authHanlder = NextAuth(authOptions);
export { authHanlder as GET, authHanlder as POST };
