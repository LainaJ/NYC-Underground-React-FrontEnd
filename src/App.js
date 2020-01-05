import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import MainContainer from './components/MainContainer'
import PhotoContainer from './components/PhotoContainer'
import Navbar from './components/Navbar'
import photo from './most_cropped.jpg'
import CreateTunnelForm from './components/CreateTunnelForm';
import Login from './components/Login'; 


class App extends React.Component {

  state = {
    tunnels: [],
    favorites: [],
    mainPhoto: "",
    isHovering: false, 
    username: "",
    haveFavorites: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tunnels')
    .then(resp => resp.json())
    .then(tunnelData => this.setState({
          tunnels: tunnelData,
          mainPhoto: photo
        })
        )
    
      }


  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/tunnels')
  //   .then(resp => resp.json())
  //   .then(tunnelData => this.setState({
  //     tunnels: tunnelData,
  //     mainPhoto: photo
  //   })
  //   )

  // }


  addToFavorites = (addedTunnel) => {
    this.setState({
      favorites: [...this.state.favorites, addedTunnel],
    })
    this.setFavorites()
  }

  setFavorites = () => {
    this.setState({
      haveFavorites: false
    })
  }

  removeFromFavorites = (removedTunnel) => {
    let updatedFavorites = this.state.favorites.filter(tunnel => tunnel !== removedTunnel)
      this.setState({
        favorites: updatedFavorites
      })
  }

  renderForm = (routerProps) => {
    return <CreateTunnelForm tunnels={this.state.tunnels} addNewTunnel={this.addNewTunnel} routerProps={routerProps} />
  }

  renderLogin = (routerProps) => {
    return <Login routerProps={routerProps} login={this.login} />
  }

  login = (enteredName) => {
    // console.log(enteredName.username)
    this.setState({
      username: enteredName.username
    })
  }

  addNewTunnel = (newTunnelObject) => {
    let newTunnels = [...this.state.tunnels, newTunnelObject]
    this.setState({
      tunnels: newTunnels
    })
  }

  render () {
    console.log("username on render: ", this.state.username)
    return (
      <div>
        <Navbar username={this.state.username} /> 
        <PhotoContainer 
          mainPhoto={this.state.mainPhoto} 
          isHovering={this.state.isHovering}
        /> 
        <Switch>
          <Route path="/welcome" render={() => 
            <MainContainer 
              tunnels={this.state.tunnels} 
              favorites={this.state.favorites} 
              addToFavorites={this.addToFavorites} 
              removeFromFavorites={this.removeFromFavorites}
              showDetails={this.showDetails}
              isHovering={this.state.isHovering}
              haveFavorites={this.state.haveFavorites}
            />}/> 
          <Route path="/new" render={this.renderForm}/>
          <Route path="/login" render={this.renderLogin} />
         </Switch>
      </div>
    )
  }

}

export default App;
