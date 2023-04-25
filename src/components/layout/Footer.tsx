import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t-2 border-black h-16">
      <nav className="font-body h-full w-full flex justify-center items-center">
        <ul className="flex h-25">
          <li className="mx-4">
            <a href="#">terms of service</a>
          </li>
          <li className="mx-4">
            <a href="#">privacy policy</a>
          </li>
          <li className="mx-4">&copy; Highly Liquid 2023</li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
