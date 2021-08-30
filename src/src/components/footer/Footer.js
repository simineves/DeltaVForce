import Card from "../card/Card"
import { devs } from "../../data"

import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-title text-center">Meet the developers</p>
      <div className="footer-items flex-row">
        {devs.map((dev) => (
          <Card
            width="420px"
            direction="column"
            key={dev.title}
            title={dev.title}
            body={dev.body}
            img={dev.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Footer
