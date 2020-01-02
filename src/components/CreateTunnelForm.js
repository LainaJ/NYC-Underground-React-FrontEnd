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

      fetch('', { 
      method: 'POST', 
      headers: {
        'content-type':'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        power: this.state.location,
        image: this.state.image
      })
      })
    .then(response => response.json())
    .then(newTunnel => this.props.addNewTunnel(newTunnel))

      //this renders it to the screen:
      // this.props.addNewKaiju({
      //   name: this.state.formName,
      //   power: this.state.formPower,
      //   image: this.state.formImage
      // })
    }

    render() {
      return (
        <div>
          <h1>Discover a NYC tunnel that you want to share?</h1>
            <p>Snap a photo, submit the details and add to our collection!</p>
            <form id='create-tunnel-form' onSubmit={this.handleSubmitForm}>

              <label>Tunnel Name: </label>
              <input type='text' name="name" placeholder="Give your tunnel a name.."
              value={this.state.name} 
              onChange={ (e) => this.handleChange(e)}
              />
              <label>Location: </label>
              <input type='text' name="location" placeholder="Add an approximate location..." 
              value={this.state.location}
              onChange={ (e) => this.handleChange(e)}
              />
              <label>Description: </label>
              <input type='text' name="description" placeholder="Describe your tunnel! " 
              value={this.state.description}
              onChange={ (e) => this.handleChange(e)}
              />
              <label>Image: </label>
              <input type='text' name="image" placeholder="Add your image url here..." 
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