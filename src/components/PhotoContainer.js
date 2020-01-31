import React from 'react';
// import photo from '../most_cropped.jpg'

class PhotoContainer extends React.Component {

    render() {
        return (
        <div>
            <img src={this.props.mainPhoto} alt="Tunnel" className="main" />
        </div>
        );
    }

    }

export default PhotoContainer;
