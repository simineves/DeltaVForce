import { useState, useEffect, useRef } from "react"
import { IonPhaser } from "@ion-phaser/react"
import { config } from "../phaser/config"
import "./index.css"

const GamePage = () => {
  const gameRef = useRef(null)
  const [game, setGame] = useState()
  const [init, setInit] = useState(false)

  useEffect(() => {
    if (init) {
      setGame(Object.assign({}, config))
    }
  }, [init])

  const handleGameStart = () => {
    setInit(true)
  }

  const handleGameEnd = () => {
    gameRef.current?.destroy()
    setInit(false)
    setGame(undefined)
  }

  return init ? (
    <>
      <IonPhaser ref={gameRef} game={game} initialize={init} />
      <button onClick={handleGameEnd}>End</button>
    </>
  ) : (
    <button onClick={handleGameStart}>Start</button>
  )
}

export default GamePage
