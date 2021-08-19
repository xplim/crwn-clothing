import React from 'react';

import './sign-in.styles.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState(INITIAL_STATE);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            autoComplete="email"
            required
          />
          <label>Email</label>

          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            autoComplete="current-password"
            required
          />
          <label>Password</label>

          <input type="submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

export default SignIn;
