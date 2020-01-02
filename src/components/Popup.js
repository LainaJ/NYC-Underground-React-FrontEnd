import React from 'react';  
import '../index.css';  

class Popup extends React.Component {  

  render() {  
    return (  
    <div className='popup'>  
      <div className='popup_inner'>  
        <h1>{this.props.tunnel.name}</h1>  
        <p>{this.props.tunnel.location}</p>
        <p>{this.props.tunnel.description}</p>
        <button onClick={this.props.togglePopup}>Close</button>  
      </div>  
    </div>  
    );  
    }  
    }  

export default Popup;