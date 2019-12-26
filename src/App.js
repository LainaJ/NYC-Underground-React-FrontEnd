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
    this.setState({
      favorites: [...this.state.favorites, addedTunnel]
    })
  }

  removeFromFavorites = (removedTunnel) => {
    let updatedFavorites = this.state.favorites.filter(tunnel => tunnel !== removedTunnel)
      this.setState({
        favorites: updatedFavorites
      })
  }

  render () {
    return (
      <div >
        < Navbar /> 
        < PhotoContainer photo={this.state.mainPhoto}/> 
        < MainContainer tunnels={this.state.tunnels} favorites={this.state.favorites} addToFavorites={this.addToFavorites} removeFromFavorites={this.removeFromFavorites} /> 
      </div>
    )
  }

}

export default App;
