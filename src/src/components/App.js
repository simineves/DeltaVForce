// react imports
import { Route, Switch } from "react-router-dom"

// page imports
import HomePage from "../pages/HomePage"
import GamePage from '../pages/GamePage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/game" exact component={GamePage} />
      {/* <Route path="*" component={NotFoundPage} /> */}
    </Switch>
  )
}

export default App
