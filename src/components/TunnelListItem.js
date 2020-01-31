import React, { Component } from 'react';
import Popup from './Popup';  


class TunnelListItem extends Component {

  render() {
    return (
      <div>

        <div>
          <div className="card">
            <div className="card-body">
              <img className="card-images" src={this.props.tunnel.image} alt="tunnel"/>
              <h5 className="card-title">
              {this.props.tunnel.name}
              </h5>
              <p className="card-text">
                  {this.props.tunnel.location}
              </p>
              <p className="card-text">
              {/* {this.props.tunnel.description} */}
              </p>
              <button onClick={ () => this.props.addToFavorites? this.props.addToFavorites(this.props.tunnel): this.props.removeFromFavorites(this.props.tunnel)}>
              {this.props.addToFavorites? "Add To Favorites": "Remove From Favorites"}</button>
              <button onClick={ (e) => this.props.togglePopup(e, this.props.tunnel.image)}>
              {this.props.popupIsOpen? <Popup tunnel={this.props.tunnel} togglePopup={this.props.togglePopup} /> : null} Details </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TunnelListItem;