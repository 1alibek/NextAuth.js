
"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center space-x-4">
          <button  onClick={()=>signIn("google",{
            redirect:true,
            callbackUrl:"/profile"
          })} className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
            <FaGoogle className="text-red-500" />
            <span>Google</span>
          </button>
          <button onClick={()=>signIn("github",{
            redirect:true,
            callbackUrl:"/profile"
          })} className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
            <FaGithub />
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
