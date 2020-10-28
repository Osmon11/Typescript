import React, { useState } from "react";
import "../style.css";
import { AuthProvider } from "../components/auth";
import { Link, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Game from "../pages/Game";
import Login from "../pages/Login";
import Admin from "../pages/admin";
import { RootStore } from "../redux/store/store";
import base from "../config/config";
import { connect } from "react-redux";
import { action_1 } from "../redux/actions/actionCreators";
import { ExpenseActionTypes } from "../types/actions.types";

interface AppProps {
  auth: boolean;
  setAuth: (value: boolean) => ExpenseActionTypes;
}

const App: React.FC<AppProps> = ({ auth, setAuth }) => {
  const [login, setLogin] = useState(false);

  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLogin(false);
    try {
      await base.auth().signOut();
      setAuth(false);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <section>
      <AuthProvider>
        <Route exact path='/' component={Game} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/admin' component={Admin} />
        <div className='ButtonBx'>
          {login && auth !== login ? (
            <Link to='/'>
              <button onClick={() => setLogin(false)}>Back</button>
            </Link>
          ) : login && auth ? (
            <Link to='/'>
              <button onClick={clickHandler}>Exit</button>
            </Link>
          ) : (
            <Link to='/login'>
              <button onClick={() => setLogin(true)}>Go to admin</button>
            </Link>
          )}
        </div>
      </AuthProvider>
    </section>
  );
};

const mapStateToProps = (state: RootStore) => {
  return {
    auth: state.reducer.admin.auth,
  };
};
const mapDispatchToProps = {
  setAuth: action_1,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
