import React, { Component } from 'react';
import TunnelListItem from './TunnelListItem'

class TunnelContainer extends Component {


//map through and for each tunnel item render a tunnelList Item component

renderTunnels = () => {
  return this.props.tunnels.map(tunnel =>   <TunnelListItem tunnel={tunnel} /> )
}

  render() {
    return (
      <div>
        <h2>All NYC Underground Tunnels</h2>
        {this.renderTunnels()}
        
      </div>
    );
  }

}

export default TunnelContainer;