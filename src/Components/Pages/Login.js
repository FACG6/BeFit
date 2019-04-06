import React, {Component} from 'react';
import Nav from '../MainComponents/Nav'
import Input from '../MainComponents/Input'
import Button from '../MainComponents/Button'
import {Redirect} from 'react-router-dom'


class Login extends Component{
  state = {
    originEmail: 'farah.geeks@gmail.com',
    originPass: '123Farah',
    email: '',
    password: '',
    loginError: null,
    login: false,
  }
  handleChange = (event) => {
    const target = event.target;
    this.setState(() => {
      return {[target.type]: target.value}
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, originEmail, originPass} = this.state;
    if(email === originEmail && password === originPass ){
      this.setState(() => ({loginError: null, login: true}));
      localStorage.setItem('login', true);
    }else {
      this.setState({loginError: 'Your password or email is invalid'});
    }
  }
  render(){
    const {email, password, loginError, login} = this.state;
    return (
    <>
      <Nav logout={'false'}/>
      <form onSubmit={this.handleSubmit}>
        <h2>Login to your account</h2>
        <Input onChange={this.handleChange} value={email} type='email' name='email' placeholder='Enter your email'/>
        <Input onChange={this.handleChange} value={password} type='password' name='password' placeholder='Enter your password'/>
        {loginError ? <span className='error' style={{color:'red', fontSize: 14}}>{loginError}</span>: null }
        <Button name='Login' />
        {login ? <Redirect to='/' />: null}
      </form>
    </>

    )
  }

}

export default Login;