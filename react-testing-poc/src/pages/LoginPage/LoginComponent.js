import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Typography,
} from "@material-ui/core";
import "./LoginComponent.css";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import SignupForm from "../../component/SignUpForm/SignupForm";
import { useHistory } from "react-router-dom";
import { LoginProvider } from "../../utils/LoginContext";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState({ userId: "", password: "" });
  const [formErrors, setFormErrors] = useState({ userId: "", password: "" });
  const [needToSignup, setNeedToSignup] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history = useHistory();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "userId") {
      setFormErrors({ ...formErrors, userId: "" });
    } else {
      setFormErrors({ ...formErrors, password: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userId, password: pwd } = loginData;
    setFormErrors({
      ...formErrors,
      userId: !loginData.userId ? "User Name field is mandatory" : "",
      password: !loginData.password ? "Password is Mandatory!" : "",
    });
    if (!!userId && !!pwd) {
      let emailsList = usersList?.map((ele) => ele.email);
      if (!emailsList.includes(userId) && userId !== "chathan2569@gmail.com" ) {
        alert("Please signup first");
      } else {
        setIsLoggedIn(true);
        history.push("/");
      }
    }
  };

  const getSignupForm = () => {
    setNeedToSignup(true);
  };

  return (
    <LoginProvider value={isLoggedIn}>
        <div className="d-flex justify-content-end login-wrapper">
        {!needToSignup ? (
            <Box
            component={"form"}
            maxHeight={500}
            onSubmit={handleSubmit}
            minWidth={400}
            m={5}
            px={5}
            pt={3}
            pb={5}
            style={{ border: "1px solid rgba(255,255,255)" }}
            display={"flex"}
            flexDirection={"column"}
            className="login-form"
            >
            <Box>
                <Typography
                variant="h5"
                style={{ fontWeight: 600 }}
                className="login-heading mb-3"
                id="login-title"
                >
                Welcome to Github Connect
                </Typography>
            </Box>
            <FormControl>
                <label htmlFor="user-id">User Id</label>
                <input
                    id="user-id"
                    label="User Id"
                    className="form-control"
                    name="userId"
                    value={loginData.userId}
                    type="email"
                    onChange={handleChange}
                ></input>
            </FormControl>
            <FormControl className="my-4">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    label="Password"
                    className="form-control"
                    name="password"
                    value={loginData.password}
                    type="password"
                    onChange={handleChange}
                ></input>
            </FormControl>
            <Button
                style={{ textTransform: "none" }}
                variant="contained"
                color="primary"
                type="submit"
                className="mt-auto"
                id="login-btn"
                endIcon={<ExitToAppOutlinedIcon />}
            >
                Login
            </Button>
            <p className="signup-check-text">
                Not regestired yet?{" "}
                <span className="signup-hyperlink" onClick={getSignupForm}>
                SignUp
                </span>{" "}
                here
            </p>
            </Box>
        ) : (
            <SignupForm needToSignupFun={setNeedToSignup} setUsersList={setUsersList}/>
        )}
        </div>
    </LoginProvider>
  );
};
export default LoginComponent;
