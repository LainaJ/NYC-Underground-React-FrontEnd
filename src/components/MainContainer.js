import React from 'react';
import FavoritesContainer from './FavoritesContainer'
import TunnelContainer from './TunnelContainer'

class MainContainer extends React.Component {


    render() {
        return (
        <div>
            This is the Main container div! 

            <div className="row">
            <div className="col-4">
            <FavoritesContainer favorites={this.props.favorites} removeFromFavorites={this.props.removeFromFavorites} />
            </div>
            <div className="col-8">
            <TunnelContainer tunnels={this.props.tunnels} addToFavorites={this.props.addToFavorites} />
            </div>
          </div>
        
        </div>
        )
    }

    }

export default MainContainer;
