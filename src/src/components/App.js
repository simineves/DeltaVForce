// react imports
import { Route, Switch } from "react-router-dom"

// page imports
import HomePage from "../pages/HomePage"

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="*" component={NotFoundPage} /> */}
    </Switch>
  )
}

export default App
