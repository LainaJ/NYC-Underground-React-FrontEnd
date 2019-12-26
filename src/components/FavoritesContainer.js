import React, { Component } from 'react';
import TunnelListItem from './TunnelListItem';

class FavoritesContainer extends Component {

  // map through the favorites array 
  renderFavorites = () => {
    let favoritesArray =this.props.favorites
    return favoritesArray.map(tunnel => <TunnelListItem tunnel={tunnel} removeFromFavorites={this.props.removeFromFavorites} /> )
  }


  render() {
    console.log(this.props.favorites)
    return (
      <div>
        <h2>My Favorite Underground Tunnels</h2>
        {/* call a render here so they render here later */}
        {this.renderFavorites()}
        
      </div>
    );
  }

}

export default FavoritesContainer;