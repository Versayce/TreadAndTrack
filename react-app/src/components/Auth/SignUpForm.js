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

      if(email.includes("@")) {
        const data = await dispatch(signUp(username, email, password));
        // console.log('SIGNUP DATA ================ :>>>>>>>>>', data)
        if (data) {
          const emailError = data[0]?.split(":")[1]
          const passwordError = data[1]?.split(":")[1]
          let authErrors = []
          authErrors.push(emailError, passwordError)
          setErrors(authErrors);
        }
        else dispatch(closeModal())
      }else {
        setErrors(["Please input a valid email"])
      }
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
      <h1>Signup</h1>
      <InputWrapper>
        <label>User Name</label>
        <StyledInput
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          ></StyledInput>
      </InputWrapper>
      <InputWrapper>
        <label>Email</label>
        <StyledInput
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          ></StyledInput>
      </InputWrapper>
      <InputWrapper>
        <label>Password</label>
        <StyledInput
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          ></StyledInput>
      </InputWrapper>
      <InputWrapper>
        <label>Repeat Password</label>
        <StyledInput
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          ></StyledInput>
      </InputWrapper>
          <ErrorMessages>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </ErrorMessages>
      <StyledButton type='submit'>Sign Up</StyledButton>
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
