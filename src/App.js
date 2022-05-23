import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
            <TopMenu />

            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/blogposts">
                    <BlogOverview />
                </Route>
                <Route exact path="/blogposts/:id">
                    <BlogPostPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
