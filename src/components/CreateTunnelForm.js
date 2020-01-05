import React from 'react'
import '../index.css';

  class CreateTunnelForm extends React.Component {

    state = {
      name: "",
      location: "",
      description: "",
      image: ""
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmitForm = (e) => {
      e.preventDefault()

      fetch('http://localhost:3000/api/v1/tunnels', { 
      method: 'POST', 
      headers: {
        'content-type':'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        location: this.state.location,
        description: this.state.description,
        image: this.state.image
      })
      })
    // .then(response => response.json())
    // .then(newTunnel => this.props.addNewTunnel(newTunnel))

      // this renders it to the screen:
      this.props.addNewTunnel({
        name: this.state.name,
        location: this.state.location,
        description: this.state.description,
        image: this.state.image
      })
    }

    render() {
      return (
        <div>
          <h1>Discover a NYC tunnel that you want to share?</h1>
            <p className="create-form" >Snap a photo, submit the details and add to our collection!</p>
            <form className="create-form" onSubmit={this.handleSubmitForm}>
              <label className="labels" >Tunnel Name: </label>
              <input type='text' name="name" placeholder="(e.g., Secret Tunnel)"
              value={this.state.name} 
              onChange={ (e) => this.handleChange(e)}
              />
              <label className="labels">Location: </label>
              <input type='text' name="location" placeholder="e.g., Union Square" 
              value={this.state.location}
              onChange={ (e) => this.handleChange(e)}
              />
              <label className="labels">Description: </label>
              <input type='text' name="description" placeholder="Describe your tunnel... " 
              value={this.state.description}
              onChange={ (e) => this.handleChange(e)}
              />
              <label className="labels">Image: </label>
              <input type='text' name="image" placeholder="Add image url here..." 
              value={this.state.image}
              onChange={ (e) => this.handleChange(e)}
              />
              <br/>
              <input type='submit' value='Add Tunnel' />
            </form>
          </div>
      )
    }
  }

  export default CreateTunnelForm