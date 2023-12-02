import React from 'react'

import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            {/* Tailwind Component for login form  */}
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" className="border border-gray-300 rounded-lg p-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input type="password" id="password" className="border border-gray-300 rounded-lg p-2 w-full" />
                        </div>
                        {/* Login Button with forgot password link */}
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                            <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Login