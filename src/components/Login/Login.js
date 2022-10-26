import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); //email для электронной почты пользователя 
  const [emailIsValid, setEmailIsValid] = useState(); // для проверки валидности  email, если не верно , то border будет красным 
  const [enteredPassword, setEnteredPassword] = useState('');//чтобы ввели пароль 
  const [passwordIsValid, setPasswordIsValid] = useState();npm // IsValid чтобы пароль ввели правильно , валидность был правильным , если не верно , border будет красным и будет ошибка
  const [formIsValid, setFormIsValid] = useState(false); // чтобы проверить выключения кнопки disabled


  useEffect(() => {
    //UseEffect позволяет использовать состояноние и друние возможности без написания классов
    // hook мы можем вызывать разные побочные эффекты
    const timer = setTimeout(()=>{
      // setTimeout чтобы устанавливать таймер обратного отсчета 
      console.log("hello world");
      setFormalIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    },1500);
  })

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
