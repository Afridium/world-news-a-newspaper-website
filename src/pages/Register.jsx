import React, { use, useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState("");
    const { createUserWithEmail, setUser, updateUser, signInWithGoogle } = use(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        // Your auth function here
        createUserWithEmail(email,password).then((result) =>{
            const user = result.user;
            updateUser({displayName: name}).then(() => {
             setUser({...user, displayName: name});   
            }).catch((error) => alert(error.message))
            
            Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Account Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
            navigate("/");
        }).catch((error) => {
            console.log("Registration Failed", error.message);
        })
    };

    const handleSignInwithGoogle = () => {
        signInWithGoogle().then((result) => {
            const user = result.user;
            setUser(user);
            navigate(`${location.state? location.state : "/"}`) //if location state exists then take it to the state from the private router else take it to homepage
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-4 text-primary">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-10">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center mb-12">
                    Register your account
                </h1>

                <form onSubmit={handleRegister} className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your Name"
                            className="w-full p-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1">Email address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email address"
                            className="w-full p-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-neutral text-white py-3 rounded-lg text-lg font-semibold hover:bg-neutral-focus transition"
                    >
                        Register
                    </button>
                </form>

                {/* Register Link */}
                <div>
                  <p className="text-center mt-6 text-gray-500">
                    Already Have An Account ?{" "}
                    <Link to="/auth/login" className="text-red-500 font-medium">
                        Login
                    </Link>
                </p>  
                
                <p className='text-center mt-5 font-semibold'>Or</p>
                {/* Register with socials */}
                <div className='grid grid-cols-1 gap-1 px-1 mt-2'>
                    {/* Google */}
                    <button onClick={handleSignInwithGoogle} className="btn bg-base-200 text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Register with Google
                    </button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Register;