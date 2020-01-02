import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import Navbar from './components/Navbar'
import CreateTunnelForm from './components/CreateTunnelForm';
// import * as serviceWorker from './serviceWorker';

      const Login = () => {
        return (
          <div>
            <form>
              <div>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>
        );
      };


    ReactDOM.render((
        <Router>
            <div>
            <App />, document.getElementById('root')
            {/* If I write it like below, it will always render in addition to the others */}
            {/* <Route path="/" component={Navbar}/> */}
          
            {/* <Route path="/welcome" component={App}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/new" component={CreateTunnelForm} /> */}
            </div>
        </Router>),
    document.getElementById('root')

    );//end react DOM render 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//the old render before I added react routes 
//   ReactDOM.render((
//     <App />, document.getElementById('root')
//     ));//end react DOM render 