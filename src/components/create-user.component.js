import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div>
        <h2>Why track your exercise?</h2>
        <ul>
          <li> Makes it more likely to reach and surpass your goal.</li>
          <li>Allows you to be more efficient in your time and workouts.</li>
          <li>Lends accountability to yourself and your goals.</li>
          <li>Allows for easier modifications and shows when and where changes need to be made.</li>
          <li>It can be motivating and reinforcing to remind you why you are doing what you are.</li>
          <li>Helps to drive the focus and direction of your programming.</li>
          <li>Keeps you committed to your plan.</li>
        </ul>
        <h2>About us</h2>
        <p> We here at Exercise Tracker know the impact of exercise in everyday life.</p>
        <p>We understand the difficulties you face in following a routine.</p>
        <p><b><i>So signup with our tracker now and allow us to help you!</i></b></p>
        <h3>Create New User</h3>
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
            <input type="submit" value="Create New User" className="btn btn-primary" />
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/create" className="nav-link"><button type="button" class="btn btn-primary">Enter New Record</button></Link>
            </li>
            <li className="navbar-item">
            <Link to="/" className="nav-link"><button type="button" class="btn btn-primary">View LeaderBoard</button></Link>
            </li>
            </ul>
          </div>
        </form>
        <div class="footer">
        <p><i>Feel free to contact us at 9977099888(Tanishq Wadhwani)</i></p>
        </div>
      </div>
    )
  }
}