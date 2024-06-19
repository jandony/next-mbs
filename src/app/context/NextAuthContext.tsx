import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { Session } from "next-auth";

// Define the types for user and context
interface User {
    username: string;
}

interface NextAuthContextType {
    currentSession: Session | null;
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

// Create a context with a default value
const NextAuthContext = createContext<NextAuthContextType | undefined>(undefined);

// Define the provider props type
interface AuthProviderProps {
    children: ReactNode;
}

// Create a provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentSession, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getServerSession(options);
            if (session) {
                setSession({ session });
                // setUser({ username: session.user.name });
                setUser({ username: session.user }); // Adjust based on your session structure
            }
        };

        fetchSession();
    }, []);

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    // Get all values
    const values = {
        currentSession,
        user,
        login,
        logout
    }

    return (
        <NextAuthContext.Provider value={values}>
            {children}
        </NextAuthContext.Provider>
    );
};

// Custom hook to use the NextAuthContext
export const useNextAuth = (): NextAuthContextType => {
    const context = useContext(NextAuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
