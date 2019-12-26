import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import PhotoContainer from './components/PhotoContainer'
import Navbar from './components/Navbar'


class App extends React.Component {

  state = {
    tunnels: [],
    favorites: [],
    mainPhoto: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/tunnels')
    .then(resp => resp.json())
    .then(tunnelData => this.setState({
      tunnels: tunnelData
    })
    )
  }

addToFavorites = (addedTunnel) => {
console.log(addedTunnel)
  this.setState({
    favorites: [...this.state.favorites, addedTunnel]
  })
}

  render () {
  return (
    <div >
      < Navbar /> 
      < PhotoContainer photo={this.state.mainPhoto}/> 
      < MainContainer tunnels={this.state.tunnels} favorites={this.state.favorites} addToFavorites={this.addToFavorites} /> 
    </div>
  );
  }

}

export default App;
