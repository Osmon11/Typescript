import React, { useCallback } from "react";
import user from "../img/user.png";
import lock from "../img/lock.png";
import "../style.css";
import { action_1 } from "../redux/actions/actionCreators";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import base from "../config/config";
import { RootStore } from "../redux/store/store";
import { ExpenseActionTypes } from "../types/actions.types";

interface LoginProps extends RouteComponentProps {
  setAuth: (value: boolean) => ExpenseActionTypes;
}

const Login: React.FC<LoginProps> = ({ history, setAuth }) => {
  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await base
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin");
        setAuth(true);
      } catch (error) {
        alert("Логин или пароль не правильны! \n" + error.message);
      }
    },
    [history, setAuth]
  );
  return (
    <div className='box'>
      <div className='form'>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className='inputBx'>
            <input type='email' placeholder='UserEmail' name='email'></input>
            <img src={user} alt='icon-user'></img>
          </div>
          <div className='inputBx'>
            <input
              type='password'
              placeholder='Password'
              name='password'
            ></input>
            <img src={lock} alt='icon-lock'></img>
          </div>
          <label className='remember'>
            <input type='checkbox' />
            Remember Me
          </label>
          <div className='inputBx'>
            <input type='submit' value='Login'></input>
          </div>
        </form>
        <p>
          Foget <a href='https://google.com'>Password</a>
        </p>
        <p>
          Need an <a href='https://google.com'>Password</a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStore) => {
  return {
    admin: state.reducer.admin,
  };
};
const mapDispatchToProps = {
  setAuth: action_1,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
