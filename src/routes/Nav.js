import React from 'react';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Interchange from '../components/Interchange';
import Sign from '../components/Sign';
import './Nav.css';
import {HashRouter, Route, Link, Routes} from "react-router-dom";

export default function Nav() {
      
  return (
    <HashRouter>
      <div className="navbar">
        <h1>
          <Link to={`/`} className="homeTitle">
            Nexflex
          </Link>
        </h1>
        <h1>
          <Link to={`/sign`} className="signTitle">
            Sign in
          </Link>
        </h1>
      </div>

      <div className="info">
        <Routes>
          <Route
            exact={true}
            path={"/"}
            element={<Home />}
          />
          <Route
            path={"/movie/:id"}
            element={<Detail />}
          />
          <Route
            path={"/ic/:id"}
            element={<Interchange />}
          />
          <Route
            path={"/sign"}
            element={<Sign />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}