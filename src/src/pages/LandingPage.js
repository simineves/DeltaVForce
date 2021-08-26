import { Landing } from "../layouts/landing/Landing"
import Card from "../components/card/Card"
import { description } from "../data"

const LandingPage = () => {
  return (
    <Landing direction="column">
      {description.map((item) => (
        <Card
          className="margin-y"
          key={item.title}
          title={item.title}
          body={item.body}
          float={item.float}
          img={item.img}
        />
      ))}
    </Landing>
  )
}

export default LandingPage
