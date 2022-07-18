import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
          <span className="ml-3 text-xl">Contacts</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/contacts" className="mr-5 hover:text-gray-900">All Contacts</Link>
          <Link to="/add-contact" className="mr-5 hover:text-gray-900">Add Contact</Link>
          <Link to="/messages" className="mr-5 hover:text-gray-900">Messages</Link>
          <Link to="/new-message" className="mr-5 hover:text-gray-900">New Message</Link>
        </nav>
      </div>
    </header>
  </div>
  )
}

export default Navbar