import { LogoSVG } from '@components/images'
import React, { FC, ReactNode } from 'react'

const NavItem: FC<{ children: ReactNode }> = ({ children }) => {
  return <li className="ml-5 font-body">{children}</li>
}

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-3 py-3 bg-theme-light border-b-2 border-black shadow-lg">
      <div>
        <LogoSVG size={110} />
      </div>

      <nav>
        <ul className="flex flex-row items-center">
          <NavItem>
            <a href="#">Home</a>
          </NavItem>
          <NavItem>
            <a href="#">About</a>
          </NavItem>
          <NavItem>
            <a href="#">Contact</a>
          </NavItem>
        </ul>
      </nav>
    </header>
  )
}

export default Header
