import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);

    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
        });
        return () =>{unsubscribe()};
    }, [])
    const userInfo = {
        user,
        setUser,
        createUserWithEmail,
        signInWithEmail,
        signInWithGoogle,
        logOut,
        loading,
        setLoading,
        updateUser
    }

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;