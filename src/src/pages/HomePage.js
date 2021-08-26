import { useHistory } from "react-router-dom"

const HomePage = () => {
  const history = useHistory()

  return (
    <section
      style={{ display: "grid", placeContent: "center", flex: 1, margin: 10 }}
    >
      <h2>Home Page</h2>
      <button style={{ margin: 10 }} onClick={() => history.push("/game")}>
        Play Game
      </button>
    </section>
  )
}

export default HomePage
