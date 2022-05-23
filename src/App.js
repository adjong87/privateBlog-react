import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogOverview from "./pages/BlogOverview";
import LoginPage from "./pages/LoginPage";
import BlogPostPage from "./pages/BlogPostPage";
import TopMenu from "./components/TopMenu";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <Router>
            <TopMenu
                isAuthenticated={isAuthenticated}
                toggleIsAuthenticated={toggleIsAuthenticated}
            />

            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage
                        isAuthenticated={isAuthenticated}
                        toggleIsAuthenticated={toggleIsAuthenticated}
                    />
                </Route>
                <Route exact path="/blogposts">
                    {isAuthenticated === true ? <BlogOverview/> : <Redirect to="/" />}
                </Route>
                <Route exact path="/blogposts/:id">
                    {isAuthenticated === true ? <BlogPostPage/> : <Redirect to="/" />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
