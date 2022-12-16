import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import userServices from '../services/users'
// import loginServices from '../services/login'
import { userLoginSetter } from '../reducers/userLoginReducer userLoginReducer'
import { notificationCreator } from '../reducers/notificationReducer'


const SignUpPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const signupSubmit = async (event) => {
    event.preventDefault()
    const userToSignUp = {
      username: username,
      name: name,
      password: password
    }
    try {
      const newUser = await userServices.signUp(userToSignUp)
      // const newUserLogin = await loginServices.login(username, password)
      dispatch(userLoginSetter(newUser))
      window.localStorage.setItem('loggedUserJSON', JSON.stringify(newUser))
      dispatch(notificationCreator('Successfully signed up', 3))
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={ signupSubmit }>
        <TextField required name='Username' label='Username' variant='filled' size='small' id='getUsername' onChange = {({ target }) => setUsername(target.value)}></TextField><br />
        <TextField required name='Name' label='Name' variant='filled' size='small' id='getName' onChange = {({ target }) => setName(target.value)}></TextField><br />
        <TextField required name='Password' label='Password' variant='filled' size='small' type='password' id='getPassword' onChange = {({ target }) => setPassword(target.value)} ></TextField><br />
        <Button variant='contained' color='primary' type='submit' id='signUp'>Sign up</Button><br />
        {
          username.length < 3 || password.length < 3 ? <p>The username and password should contain at least 3 characters</p> : <></>
        }
      </form>
    </div>
  )
}

export default SignUpPage