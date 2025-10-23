import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config'
export const AuthContext= createContext();
import createUser from '../Layout/Register'


const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsuscribe= onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
        });
        return () =>{
            unsuscribe();
        }
    })


    const authData={
        user,
        setUser,
        createUser,
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;