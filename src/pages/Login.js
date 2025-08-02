import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className='w-100'>
            <div className='container w-25 mt-5 shadow p-3 mb-5 bg-white rounded' >
                <h4 className='text-center' style={{ color: 'orange' }}><b>Login</b></h4>

                <input
                    className='mt-3 form-control'
                    type="text" placeholder='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /> <br />
                <input
                    className='mt-3 form-control'
                    type="password" placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} /> <br />
                
                <Button className='form-control'>Sign up</Button>
                

                
                <p className='mt-2'>New User ?<Link style={{ textDecoration: 'none' }} to='/signup'> Register</Link></p>
            </div>
        </div>
    )
}

export default Login