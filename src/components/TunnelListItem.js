import React, { Component } from 'react';

class TunnelListItem extends Component {

  render() {
    return (
      <div>
        <h2> </h2>

        <div >

          <div className="card">
            <div className="card-body">
              <img src={this.props.tunnel.image} />
              <h5 className="card-title">
              {this.props.tunnel.name}
              </h5>
              <p className="card-text">
                  {this.props.tunnel.location}
              </p>
              <p className="card-text">
              {this.props.tunnel.description}
              </p>
              <button onClick={ () => this.props.addToFavorites? this.props.addToFavorites(this.props.tunnel): this.props.removeFromFavorites(this.props.tunnel)}>
              {this.props.addToFavorites? "Add To Favorites": "Remove From Favorites"}</button>
            </div>
          </div>


</div>
        
      </div>
    );
  }

}

export default TunnelListItem;