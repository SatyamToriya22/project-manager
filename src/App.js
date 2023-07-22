import NavBar from './components/Layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetails from './components/Project/ProjectDetails'
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
import CreateProject from './components/Project/CreateProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={NavBar} />
        <Switch key='61'>
          <Route exact path='/' component={Dashboard} key='41'/>
          <Route exact path='/project/:id' component={ProjectDetails} key='42'/>
          <Route exact path='/signup' component={SignUp} key='43'/>
          <Route exact path='/signin' component={SignIn} key='44'/>
          <Route exact path='/create-project' component={CreateProject} key='45'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
