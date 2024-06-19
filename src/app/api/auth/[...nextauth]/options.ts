import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectToDatabase from '../../../../../lib/mongoose';
import Customer from '../../../../../models/Customer';
import bcrypt from 'bcryptjs'  // To hash passwords

export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            // GitHib Callback URL
            // http://localhost:3000/api/auth/callback/github
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                console.log('Received credentials:', credentials);
                await connectToDatabase();

                if (!credentials) {
                    console.log('No credentials provided');
                    return null;
                }
            
                // Find the user by their username
                const user = await Customer.findOne({ username: credentials.username });
                console.log('Found user:', user);
            
                if (user && await bcrypt.compare(credentials.password, user.password)) {
                    console.log('Password match');
                    return { id: user._id, name: user.name, email: user.email, username: user.username, password: user.password };
                }
            
                console.log('Invalid credentials');
                return null;
            }
        })
    ],
    pages: {
        signIn: '/signin',
        signOut: '/signout',
    },
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.username = user.username;
                token.email = user.email;
                }
            // console.log('JWT callback - token:', token, 'user:', user);
            return token;
        },
        async session({ session, token }) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.email = token.email;
                // console.log('Session callback - session:', session, 'token:', token);
            return session;
        },
        async signOut({ token, user }) {
            return true;
        },
      }
}