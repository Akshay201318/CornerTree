import React, { useState,Component } from "react";
import { auth,db} from '../config'
const SignUp=()=>{
    const [fName,seFtName]=useState('')
    const [lName,setLName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(fName,lName,email,password)
        auth.createUserWithEmailAndPassword(email,password).catch(e=>alert(e.message))
        db.collection('userInfo').add({
            firstName:fName,
            lastName:lName
        })

    }
    return(
        <form onSubmit={e=>handleSubmit(e)}>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>First name</label>
            <input onChange={e=>seFtName(e.target.value)} value={fName} type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input  onChange={e=>setLName(e.target.value)} value={lName} type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input  onChange={e=>setEmail(e.target.value)} value={email} type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input  onChange={e=>setPassword(e.target.value)} value={password} type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
    </form>
    )
}
export default SignUp