import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import {
    AuthenticatedRoute,
    UnAuthenticatedRoute,
} from "../shared/PrivateRoute";

const Body = () => {
    return (
        <div className="body__container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <UnAuthenticatedRoute path="/signup">
                    <SignUp />
                </UnAuthenticatedRoute>
                <UnAuthenticatedRoute path="/signin">
                    <SignIn />
                </UnAuthenticatedRoute>
                <AuthenticatedRoute path="/profile">
                    <Profile />
                </AuthenticatedRoute>
            </Switch>
        </div>
    );
};

export default Body;
