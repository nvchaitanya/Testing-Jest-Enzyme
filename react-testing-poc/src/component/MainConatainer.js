import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import React,{useContext} from 'react'
import About from "../pages/AboutPage/About";
import HomePage from "../pages/HomePage/HomePage";
import LoginComponent from "../pages/LoginPage/LoginComponent";
import "./MainContainer.css"
import { LoginContext } from "../utils/LoginContext";
import GitUserSearch from "./GitUserSearch";

function MainConatainer() {
    const isAuthenticated = useContext(LoginContext)
    return (
        <div className="app-wrapper">
            <Router>
                {!isAuthenticated && <Redirect to="/auth" />}
                <Route exact={true} path="/auth" component={LoginComponent} />
                <Route exact={true} path="/" component={HomePage} />
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/git-repos" component={GitUserSearch} />
            </Router>
        </div>        
    )
}

export default MainConatainer
