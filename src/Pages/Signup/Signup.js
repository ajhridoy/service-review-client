import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const Signup = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password, name, photourl)
        createUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success('User Sign Up Successfully')
            updateUser(name, photourl)
            .then(() => {
               
              }).catch((error) => {
                setError(error.message)
              });
            console.log(user)
            form.reset()
          })
          .catch((error) => {
            setError(error.message)
          });
      }
    return (
        <div className="relative flex flex-col p-4 justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  ring-purple-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
               Sign Up
            </h1>
            <form onSubmit={handleSignup} className="mt-6">
                <div className="mb-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Full Name: 
                    </label>
                    <input
                        type="text"
                        name='name'
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="photourl"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        PhotoURL
                    </label>
                    <input
                        type="text"
                        name='photourl'
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name='email'
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                    />
                </div>
                <p className='text-red-600'>{error}</p>
                <div className="mt-6">
                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Sign Up
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Already have an account?{" "}
                <Link
                    to='/login'
                    className="font-medium text-purple-600 hover:underline"
                >
                    Log In
                </Link>
            </p>
        </div>
    </div>
    );
};

export default Signup;