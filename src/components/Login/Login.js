import React from "react";
import "./login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../Context/Stateprovider";
import { actionTypes, actionType } from "../../Context/Reducer";
const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = async () => {
    try {
      const data = await auth.signInWithPopup(provider);

      localStorage.setItem("token", data.credential.idToken);
      dispatch({
        type: actionType.SET_USER,
        user: data.user,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png"
          alt=""
        />
        <h1>Facebook</h1>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={signIn}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
