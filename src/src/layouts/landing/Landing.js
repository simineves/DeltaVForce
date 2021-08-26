import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

import "./Landing.css"

export const Landing = ({ children, direction }) => {
  return (
    <>
      <Navbar />
      <div className={`landing-page-container flex-${direction}`}>
        {children}
      </div>
      <Footer />
    </>
  )
}
