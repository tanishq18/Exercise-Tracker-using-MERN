import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './createuser.css';
import "bootstrap/dist/css/bootstrap.min.css";


export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      username: '',
      password: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div class="div-a">
        <h2>Why track your exercise?</h2>
        <ul>
          <li class="li-s"> Makes it more likely to reach and surpass your goal.</li>
          <li class="li-s">Allows you to be more efficient in your time and workouts.</li>
          <li class="li-s">Lends accountability to yourself and your goals.</li>
          <li class="li-s">Allows for easier modifications and shows when and where changes need to be made.</li>
          <li class="li-s">It can be motivating and reinforcing to remind you why you are doing what you are.</li>
          <li class="li-s">Helps to drive the focus and direction of your programming.</li>
          <li class="li-s">Keeps you committed to your plan.</li>
        </ul>
        <h2>About us</h2>
        <ul>
        <li class="li-s">We here at Exercise Tracker know the impact of exercise in everyday life.</li>
        <li class="li-s">We understand the difficulties you face in following a routine.</li>
        <li class="li-s"><b><i>So signup with our tracker now and allow us to help you!</i></b></li>
        </ul>
        <div class="div-s">
          <h2>Create New User</h2>
          <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
              <label>Name: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  />
            </div>
            <div className="form-group"> 
              <label>Email: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  />
            </div>
            <div className="form-group"> 
              <label>Username: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  />
            </div>
            <div className="form-group"> 
              <label>Password: </label>
              <input  type="password"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
            </div>
            <div className="form-group">
              <input type="submit" value="Create New User" className="btn btn-dark" />
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/create" className="nav-link"><button type="button" class="btn btn-dark">Enter New Record</button></Link>
              </li>
              <li className="navbar-item">
              <Link to="/" className="nav-link"><button type="button" class="btn btn-dark">View LeaderBoard</button></Link>
              </li>
              </ul>
            </div>
          </form>
        </div>
        <div class="footer">
        <p><i>Feel free to contact us at 9977099888(Tanishq Wadhwani)</i></p>
        </div>
      </div>
    )
  }
}