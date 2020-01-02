import React from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import './App.css';
import './index.css';
import MainContainer from './components/MainContainer'
import PhotoContainer from './components/PhotoContainer'
import Navbar from './components/Navbar'
// import CreateTunnelForm from './components/CreateTunnelForm';
import photo from './most_cropped.jpg'
// import Popup from './components/Popup';  


class App extends React.Component {

  state = {
    tunnels: [],
    favorites: [],
    mainPhoto: "",
    isHovering: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/tunnels')
    .then(resp => resp.json())
    .then(tunnelData => this.setState({
      tunnels: tunnelData,
      mainPhoto: photo
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
      <div>
        < Navbar /> 
        < PhotoContainer 
          mainPhoto={this.state.mainPhoto} 
          isHovering={this.state.isHovering}
        /> 
        < MainContainer 
          tunnels={this.state.tunnels} 
          favorites={this.state.favorites} 
          addToFavorites={this.addToFavorites} 
          removeFromFavorites={this.removeFromFavorites}
          showDetails={this.showDetails}
          isHovering={this.state.isHovering}
         /> 
      </div>
    )
  }

}

export default App;
