import Home from "./components/Home/Home.js";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Hello world!
      <p>Welcome to the course picker extraordinaire!</p>
      <p>THis app will keep track of courses we have played. (maybe remove the course from the previous week?)</p>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
