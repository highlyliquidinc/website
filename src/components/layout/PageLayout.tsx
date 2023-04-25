import { FC, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="page-bg-w-texture">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
