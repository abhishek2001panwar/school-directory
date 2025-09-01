import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
  

      {/* Hero Section */}
         <Nav />
      <main className="flex-grow flex items-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">School Directory System</h2>
              <p className="text-xl text-gray-600 mb-8">
                A comprehensive platform to manage and explore schools in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/addSchool" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition text-center">
                  Add a School
                </Link>
                <Link href="/showSchools" className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition text-center">
                  Browse Schools
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </main>

    

    
    </div>
  )
}