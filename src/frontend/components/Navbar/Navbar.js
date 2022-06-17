import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useSidebar } from "../../contexts";
import { AUTH_DATA, AUTH_TOKEN } from "../../constants/queer-constants";
import "./Navbar.css";

export const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { setShowSidebar } = useSidebar();

  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const signOutHandler = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(AUTH_DATA);
    setAuth({
      status: false,
      token: null,
      user: null,
    });
  };

  const navMenuForbiddenPaths = ["/", "/signin", "/signup"];

  return (
    <header className="header">
      <nav className="nav">
        {!navMenuForbiddenPaths.includes(pathname) && (
          <section>
            <button
              className="nav-menu"
              onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
            >
              <span className="material-icons nav-menu-icon">menu</span>
            </button>
          </section>
        )}
        <section className="nav-brand">
          <NavLink className="nav-brand-link" to="/">
            <img
              src={"/assets/logo.png"}
              className="nav-brand-logo"
              title="QueerTV"
              alt="QueerTV"
            />
          </NavLink>
        </section>

        {!auth.status && (
          <section className="nav-authorization">
            <button
              className="btn"
              onClick={() => navigate("/signin", { state: { from: location } })}
            >
              Sign In
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/signup", { state: { from: location } })}
            >
              Sign Up
            </button>
          </section>
        )}
        {auth.status && (
          <section className="nav-authorization">
            <button className="btn" onClick={signOutHandler}>
              Sign Out
            </button>
          </section>
        )}
      </nav>
    </header>
  );
};
