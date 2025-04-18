'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4 font-semibold'>
      <h1 className="text-2xl">Welcome to my profile</h1>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
      >
        ← Back
      </button>
    </div>
  )
}

export default Profile
