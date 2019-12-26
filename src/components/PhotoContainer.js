import React from 'react';
import photo from '../danist-inbgmkY76ps-unsplash.jpg'

class PhotoContainer extends React.Component {


    render() {
        return (
        <div>
            <img src={photo} alt="Tunnel" className="main" />
        </div>
        );
    }

    }

export default PhotoContainer;
