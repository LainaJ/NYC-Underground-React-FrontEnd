import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import Navbar from './components/Navbar'
// import CreateTunnelForm from './components/CreateTunnelForm';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));

    // ReactDOM.render((
    //     <Router>
    //         <div>
    //         {/* If I write it like below, it will always render in addition to the others */}
    //         {/* <Route path="/" component={Navbar}/> */}
            
    //         <Route path="/welcome" component={App}/>
    //         <Route path="/login" component={Login}/>
    //         <Route exact path="/new" component={CreateTunnelForm} />
    //         </div>
    //     </Router>),
    // document.getElementById('root')

    // );//end react DOM render 


//the old render before I added react routes 
  // ReactDOM.render((
  //   <App />, document.getElementById('root')
  //   ));//end react DOM render 