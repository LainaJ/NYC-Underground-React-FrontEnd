import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import PhotoContainer from './components/PhotoContainer'
import Navbar from './components/Navbar'


class App extends React.Component {

  state = {
    tunnels: [],
    mainPhoto: [], 
    favorites: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/tunnels')
    .then(resp => resp.json())
    .then(tunnelData => this.setState({
      tunnels: tunnelData
    })
    )
  }

addToFavorites = () => {
  
}

  render () {
  return (
    <div >
      < Navbar /> 
      < PhotoContainer photo={this.state.mainPhoto}/> 
      < MainContainer tunnels={this.state.tunnels} /> 
    </div>
  );
  }

}

export default App;
