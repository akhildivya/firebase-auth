import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { auth } from '../config/firebase'

function Phone() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("")
    console.log(auth.currentUser);
    
    const sendOtp = () => {

    }
    const verifyOtp = () => {

    }
    return (
        <div className='container w-25 mt-5 shadow p-3 mb-5 bg-white rounded'>
            <h4 className='text-center' style={{ color: 'orange' }}><b>Mobile OTP</b></h4>
            <input className='mt-3 form-control' type="number" placeholder='Enter Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
            <Button onClick={sendOtp}>send otp</Button>
            <input className='mt-3 form-control' type="number" placeholder='Enter otp' value={otp} onChange={(e) => setOtp(e.target.value)} /> <br />
            <Button onClick={verifyOtp}>verify otp</Button>

        </div>
    )
}

export default Phone