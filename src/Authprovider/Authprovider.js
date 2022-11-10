import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photourl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
          })
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubsCribe();
    }, [])

    const googlelogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('serviceToken')
        return signOut(auth);
    }

    const userInfo = {user, loading, createUser, updateUser, userLogin, googlelogin, logOut}
    return (
        <AuthContext.Provider value={userInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default Authprovider;