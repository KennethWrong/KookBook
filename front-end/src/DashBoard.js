import Menu from './Menu'
import Code from './Code'
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateNote from './CreateNote';

function DashBoard() {


  return (
    <div className="grid grid-cols-10  grid-rows-6 pl-8 pt-4 min-h-screen">
      <Switch>
        <Route path="/create-note">
          <CreateNote />
        </Route>
        <Route path="/">
          <Menu />
          <Code />
        </Route>
      </Switch>
    </div>
  );
}

export default DashBoard;
