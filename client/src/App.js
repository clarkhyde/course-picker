import Home from "./components/Home/Home.js";
import Picker from "./components/Picker/Picker.js";
import Courses from "./components/Courses/Courses.js";
import Login from "./components/Login/Login.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Register from "./components/Register/Register.js";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          {/* <Route path="/course-picker" render={()=>(
            sessionStorage.getItem("authToken") ? (
              <App to="/course-picker"/>
            ) :(
              <Redirect to="/login"/>
            )
          )} /> */}
          <Route path="/course-picker" component={Picker}/>
          <Route path="/courses" component={Courses}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
