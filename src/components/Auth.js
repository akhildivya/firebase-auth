import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signOut, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        }
        catch (err) {
            console.log(err);
            
        }
    }
    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (err) {
            console.log(err);

        }
    }
    const logOut = async () => {
        await signOut(auth)
    }
    const verifyEmail = async () => {
        await sendEmailVerification(auth.currentUser)
    }
    const resetPassword=()=>{
        try{

        }
        catch(err)
        {
           console.log(err);
           
        }
    }
    console.log(auth?.currentUser)
    return (
        <div className='container w-25 mt-5 shadow p-3 mb-5 bg-white rounded' >
            <h4 className='text-center' style={{ color: 'orange' }}><b>Sign in</b></h4>
            <input className='mt-3 form-control' type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
            <input className='mt-3 form-control' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
            <div className='text-center'>
                <Button onClick={signUp} className='ms-1' >Sign up</Button>
                <Button onClick={signIn} className='ms-1'>Sign In </Button>
                <Button onClick={logOut} className='ms-2' >Sign Out</Button>
                <Button onClick={verifyEmail} className='ms-2 mt-2'>Verify Email</Button>
                <Button onClick={resetPassword} className='mt-2 ms-2'>Reset Password</Button>
            </div>
        </div>
    )
}

export default Auth