import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AUTH_DATA, AUTH_TOKEN } from "../../constants/queer-constants";
import { useAuth } from "../../contexts";
import { signInService } from "../../services";
import "./SignInPage.css";

export const SignInPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showCredentialsError, setShowCredentialsError] = useState(false);

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const signInHandler = async (user) => {
    const userInformation = await signInService(user);
    if (
      userInformation !== undefined &&
      userInformation.userToken !== undefined
    ) {
      setShowCredentialsError(false);
      localStorage.setItem(AUTH_TOKEN, userInformation.userToken);
      localStorage.setItem(AUTH_DATA, JSON.stringify(userInformation.userData));
      setAuth({
        status: true,
        token: userInformation.userToken,
        user: userInformation.userData,
      });
      navigate(from, { replace: true });
    } else {
      setShowCredentialsError(true);
    }
  };

  return (
    <div className="auth-screen">
      <div className="form-wrapper">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            signInHandler(user);
          }}
        >
          <h1 className="form-heading">Sign In</h1>
          <div className="input-group input-email">
            <label htmlFor="form-email">Email*</label>
            <input
              className="input"
              type="email"
              name="form-email"
              id="form-email"
              placeholder="johndoe@gmail.com"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="input-group input-password">
            <label htmlFor="form-password">Password*</label>
            <input
              className="input"
              type="password"
              name="form-password"
              id="form-password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {showCredentialsError && (
            <small className="error-message">Wrong Credentials!</small>
          )}
          <div className="input-submit">
            <button type="submit" className="btn btn-auth btn-primary">
              Sign In
            </button>
          </div>
          <div className="input-submit">
            <button
              type="button"
              className="btn btn-auth btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                setUser({
                  email: "johndoe@gmail.com",
                  password: "johndoe",
                });
                signInHandler({
                  email: "johndoe@gmail.com",
                  password: "johndoe",
                });
              }}
            >
              Sign In as a Guest
            </button>
          </div>
          <span className="auth-link-message">
            New here?{" "}
            <Link to="/signup" className="auth-link">
              Create an account!
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
