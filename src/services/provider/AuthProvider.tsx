import React, { useEffect, useState } from "react";
import { AuthContext } from "services/context/AuthContext";
import firebase from "firebase/compat/app";
import { auth } from "firebaseSetup";

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};