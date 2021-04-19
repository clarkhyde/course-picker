import Home from "./components/Home/Home.js";
import Picker from "./components/Picker/Picker.js";
import Courses from "./components/Courses/Courses.js";
import Login from "./components/Login/Login.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/course-picker" component={Picker}/>
          <Route path="/courses" component={Courses}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
