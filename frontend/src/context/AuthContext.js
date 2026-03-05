import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call to check the authenticated user
        const fetchUser = async () => {
            // Replace this with your authentication logic
            const response = await new Promise((resolve) => {
                setTimeout(() => resolve({ name: 'John Doe', email: 'john@example.com' }), 1000);
            });
            setUser(response);
            setLoading(false);
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};