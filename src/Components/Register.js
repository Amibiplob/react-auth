import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Hook/FirebaseConfig'

const Registion = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth(app);



    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        if (/(?=.*[0-9])/.test(e.target.value)) {
            setError('Password should be a number');
            return;
        }
        if (/(?=.@*\W)/.test(e.target.value)) {
            setError('Password should be a spacial character');
            return;
        }
        if (!/(?=.{8,})/.test(e.target.value)) {
            setError("password must be 8 character");
            return;
        }
        setError('');
        setPassword(e.target.value);
    }

    //  console.log(name, password, email);
    const handleRegister = (e) => {
        e.preventDefault();
        if (name,email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                  setError('');

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                   setError(errorMessage);
                });
        }
        else {
            setError('please fill all the input')
        }
    }

    console.log(error);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">
                        <Typewriter
                            options={{
                                strings: ['Please  Register', 'Register now!'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div>
                            <h1 className='text-center text-red-400'>
                                {error}
                            </h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleName} type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmail} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleRegister} type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registion;