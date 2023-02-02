import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { closeModal } from '../../store/modal';
import styled from 'styled-components';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      const emailError = data[0]?.split(":")[1]
      const passwordError = data[1]?.split(":")[1]
      let authErrors = []
      authErrors.push(emailError, passwordError)
      setErrors(authErrors);
      console.log("ERROR DATA ================= ::::: ", errors)
    }
    else dispatch(closeModal())
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <StyledForm onSubmit={onLogin}>
      <h1>Login</h1>
      <InputWrapper>
        <label htmlFor='email'>Email</label>
        <StyledInput
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor='password'>Password</label>
        <StyledInput
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </InputWrapper>
      {errors && <ErrorMessages>{errors.map((error, idx) => <div key={idx}>{error}</div>)}</ErrorMessages>}
      <StyledButton type='submit'>Login</StyledButton>
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

export default LoginForm;
