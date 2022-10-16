import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-3/4 mx-auto">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <Typewriter
                            options={{
                                strings: ['React Authentication', 'React Auth'],
                                autoStart: true,
                                loop: true,
                            }} /></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/login'>
                            <Typewriter
                                options={{
                                    strings: ['Login', 'Login Now'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></Link></li>
                        <li><Link to='/register'>
                            <Typewriter
                                options={{
                                    strings: ['Register', 'Register Now'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;