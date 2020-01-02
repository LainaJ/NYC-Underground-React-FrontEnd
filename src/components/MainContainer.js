import React from 'react';
import FavoritesContainer from './FavoritesContainer'
import TunnelContainer from './TunnelContainer'

class MainContainer extends React.Component {

    state = {
        popupIsOpen: false
    }

    togglePopup = (e, image) => {
        this.setState({
            popupIsOpen: !this.state.popupIsOpen
        })
    }

    // showDetails = (e, image) => {
    //     // console.log(e)
    //     this.setState({
    //       isHovering: true
    //       // mainPhoto: image
    //     })
    //     }

    render() {
        return (
        <div className="main-div">
            <div className="row">
            <div className="col-4">
            <FavoritesContainer 
                favorites={this.props.favorites}
                removeFromFavorites={this.props.removeFromFavorites}
                showDetails={this.props.showDetails}
                isHovering={this.props.isHovering}
                togglePopup={this.togglePopup}
                popupIsOpen={this.state.popupIsOpen}
                 />
            </div>
            <div className="col-8">
            <TunnelContainer 
                tunnels={this.props.tunnels} 
                addToFavorites={this.props.addToFavorites} 
                showDetails={this.props.showDetails}
                isHovering={this.props.isHovering}
                togglePopup={this.togglePopup}
                popupIsOpen={this.state.popupIsOpen}
             />
            </div>
          </div>
        
        </div>
        )
    }

    }

export default MainContainer;
