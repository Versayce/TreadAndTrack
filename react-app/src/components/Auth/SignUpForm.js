import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { closeModal } from '../../store/modal';
import { signUp } from '../../store/session';
import styled from 'styled-components';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([])
    if(password === repeatPassword){
      const data = await dispatch(signUp(username, email, password));
      // console.log('SIGNUP DATA ================ :>>>>>>>>>', data)
      if (data) {
        setErrors(data)
      }
      else dispatch(closeModal())
    }else {
      setErrors(["Please input matching passwords"])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <StyledForm onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </StyledForm>
  );
};


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #421221;
  }
  `

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 10px;
    `

const ErrorMessages = styled.div`
  flex-direction: column;
  height: 70px;
  div {
    margin-top: 7px;
    margin-bottom: 7px;
    text-align: center;
    color:#bd345d;
    font-size: 14px;
  }
`

const StyledInput = styled.input`
  padding: 10px;
  justify-content: center;
  flex-direction: column;
`

export const StyledButton = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    /* border: 2px solid #333; */
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
    background-color: #eeeeee;
    span {
        position: relative;
        z-index: 2;
    }
    &:after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: #bd345d;
        transition: all .35s;
    }
    &:hover {
        color: #bd345d;
        cursor: pointer;
    }
    &:hover:after{ 
        width: 10%;
        height: 100%;
    }
`

export default SignUpForm;
