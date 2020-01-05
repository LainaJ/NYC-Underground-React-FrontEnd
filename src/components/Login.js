import React from 'react';
import ReactDOM from 'react-dom';
// import { NavLink } from 'react-router-dom';
import '../index.css';
import Clock from './Clock'; 


class Login extends React.Component {

    state = {
        username: "",
        password: ""
      }
  
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmitLogin = (e) => {
        e.preventDefault()
        console.log(this.state.username)
        //render to frontend
        this.props.login({
            username: this.state.username,
          })
        this.props.routerProps.history.push("/welcome")
      }

        render () {
          console.log(this.state.username)
          console.log(this.state.password)
            return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmitLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" onChange={ (e) => this.handleChange(e)} value={this.state.username} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={ (e) => this.handleChange(e)} value={this.state.password} />
                </div>
                <input type="submit" value="Login" />
                </form>
            </div>
            );
        };


    }

export default Login; 