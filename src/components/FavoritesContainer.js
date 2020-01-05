import React, { Component } from 'react';
import TunnelListItem from './TunnelListItem';

class FavoritesContainer extends Component {


  renderFavorites = () => {
    let favoritesArray =this.props.favorites
    return favoritesArray.map(tunnel => <TunnelListItem 
      tunnel={tunnel} 
      removeFromFavorites={this.props.removeFromFavorites}
      showDetails={this.props.showDetails} 
      isHovering={this.props.isHovering}
      togglePopup={this.props.togglePopup}
      popupIsOpen={this.props.popupIsOpen}
      /> )
  }


  render() {
    console.log(this.props.favorites)
    return (
      <div>
        {this.props.favorites.length >= 1? <h2> My Favorites </h2> : <p> Browse the tunnels on the right to select favorites!</p>}
          <p> 
          {this.renderFavorites()}
          </p>
      </div>
    );
  }

}

export default FavoritesContainer;