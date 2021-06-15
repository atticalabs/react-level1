
import Todolist from "./components/Todolist";
import Home from "./components/Home";
import Lists from "./components/Lists";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path='/todo'>
            <Todolist />
          </Route>
          <Route path='/lists'>
            <Lists />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
