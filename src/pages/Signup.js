import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth, db } from '../config/firebase'
import { setDoc, doc } from 'firebase/firestore/lite'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Signup() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleRegister = async(e) => {
        e.preventDefault();
        try{
                await createUserWithEmailAndPassword(auth,email,password)
                const user=auth.currentUser;
                if(user)
                {
                    await setDoc(doc(db,"Users",user.uid),{
                        email:user.email,
                        firstName:fname,
                        lastname:lname,
                    });
                    setFname(" ")
                    setEmail(" ")
                    setLname(" ")
                    setPassword(" ")
                }
                console.log(user);
                alert("user registered successfully")
                
        }
        catch(err)
        {
            console.log(err);
            
        }
    }
    return (
        <div>
            <div className='w-100'>
                <div className='container w-25 mt-5 shadow p-3 mb-5 bg-white rounded' >
                    <h4 className='text-center' style={{ color: 'orange' }}><b>Sign up</b></h4>
                    <input
                        className='mt-3 form-control' type="text"
                        placeholder='First Name'
                        value={fname}
                        onChange={(e) => setFname(e.target.value)} />
                    <br />
                    <input
                        className='mt-3 form-control' type="text"
                        placeholder='Last Name'
                        value={lname}
                        onChange={(e) => setLname(e.target.value)} /> <br />
                    <input
                        className='mt-3 form-control' type="text"
                        placeholder='Email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input
                        className='mt-3 form-control' type="password"
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} /> <br />

                    <Button className='form-control' onClick={handleRegister}>Sign up</Button>
                    <p className='mt-2'>Already registered ?<Link style={{ textDecoration: 'none' }} to='/'> Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup