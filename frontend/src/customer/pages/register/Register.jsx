import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      {/* Tailwind components for Register from */}
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="firstname" className="block text-gray-700 font-bold mb-2">First Name</label>
              <input type="text" id="name" name="firstname" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="block text-gray-700 font-bold mb-2">Last Name</label>
              <input type="text" id="name" name="lastname" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            {/* Tailwind component for password field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            {/* Tailwind component for confirm password field */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
            </div>
            <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register