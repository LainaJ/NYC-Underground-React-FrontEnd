import React, { Component } from 'react';

class TunnelListItem extends Component {

  render() {
    return (
      <div>
        <h2> </h2>

        <div onClick={ () => this.props.addToFavorites(this.props.tunnel)} >

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
            </div>
          </div>


</div>
        
      </div>
    );
  }

}

export default TunnelListItem;