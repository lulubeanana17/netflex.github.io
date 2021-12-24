import React from "react";
import { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./Sign.css";

function Sign() {
  const [log, setLog] = useState(true);
  const [userName, setUserName] = useState();

  const clientId =
    "275954372154-2ml6calnsl3ie8u5e1am27jtlc9q5r3j.apps.googleusercontent.com";

  const onClick = () => {
      if(log) {
          setLog(false);
      } else {
          setLog(true);
      }
  }

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser", res.profileObj);
    setUserName(res.profileObj.givenName);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  const onSuccessOut = () => {
    alert("Logout made successfully");
  };

  return (
    <div className="logContainer">
      {log ? (
        <button onClick={onClick} className="loginOut">
          <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        </button>
      ) : (
        <div>
          <h2>Hello {userName}!</h2>
          <button onClick={onClick} className="loginOut">
          <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccessOut}
        ></GoogleLogout>
          </button>
        </div>
      )}
    </div>
  );
}

export default Sign;
