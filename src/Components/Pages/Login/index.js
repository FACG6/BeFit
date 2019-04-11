import React, { Component } from "react";
import Input from "../../MainComponents/Input";
import Button from "../../MainComponents/Button";
import { Redirect } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = {
    originEmail: "farah.geeks@gmail.com",
    originPass: "123Farah",
    email: "",
    password: "",
    loginError: null,
    login: false
  };
  handleChange = event => {
    const target = event.target;
    this.setState(() => {
      return { [target.type]: target.value };
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password, originEmail, originPass } = this.state;
    if (email === originEmail && password === originPass) {
      this.setState({ loginError: null, login: true });
      localStorage.setItem("login", true);
    } else {
      this.setState({ loginError: "Your password or email is invalid" });
    }
  };
  render() {
    const { email, password, loginError, login } = this.state;
    return (
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2 className="login--heading">Login to your account</h2>
          <Input
            onChange={this.handleChange}
            value={email}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <Input
            onChange={this.handleChange}
            value={password}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          {loginError ? (
            <span className="error" style={{ color: "red", fontSize: 16 }}>
              {loginError}
            </span>
          ) : null}
          <Button buttonClass="login--button" name="Login" />
          {login ? <Redirect to="/" /> : null}
        </form>
    );
  }
}

export default Login;
