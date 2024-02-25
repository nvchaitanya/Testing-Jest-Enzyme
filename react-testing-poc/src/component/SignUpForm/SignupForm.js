import {
  Box,
  Button,
  FormControl,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import HowToRegIcon from "@material-ui/icons/HowToReg";

function SignupForm({ needToSignupFun, setUsersList }) {
  const [signupData, setSignupData] = useState({
    fName: "",
    lName: "",
    gender: "",
    email: "",
    mobile: "",
  });
  const [usersData, setUsersData] = useState([{
    fName: "",
    lName: "",
    gender: "",
    email: "",
    mobile: "",
  }]);

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fName, gender, email, mobile } = signupData;
    if (!!fName && !!gender && !!email && !!mobile) {
      setUsersData((prevList) => {
        const updatedListOfUsers = [...prevList, { ...signupData }];
        setUsersList(updatedListOfUsers);
        return updatedListOfUsers;
      });
    }
  };

  const _confirmSignUp = () => {
    needToSignupFun(false);
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      minWidth={400}
      m={5}
      mb={2}
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
          id="application-title"
        >
          Welcome to Github Connect Registration
        </Typography>
      </Box>
      <FormControl>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          className="mb-2 form-control"
          id="firstname"
          label="First name"
          name="fName"
          value={signupData.fName}
          onChange={handleChange}
        ></input>
      </FormControl>
      <FormControl className="mb-2">
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          label="Last name"
          name="lName"
          value={signupData.lName}
          onChange={handleChange}
        ></input>
      </FormControl>
      <FormControl className="mb-2">
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          id="gender"
          className="form-control"
          label="Gender"
          name="gender"
          value={signupData.gender}
          onChange={handleChange}
        ></input>
      </FormControl>
      <FormControl className="mb-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          label="Email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
        ></input>
      </FormControl>
      <FormControl className="mb-2">
        <label htmlFor="mobile-number">Mobile number</label>
        <input
          type="number"
          id="mobile-number"
          className="form-control"
          label="Mobile Number"
          name="mobile"
          maxLength={10}
          value={signupData.mobile}
          onChange={handleChange}
        ></input>
      </FormControl>
      <Button
        style={{ textTransform: "none" }}
        variant="contained"
        color="primary"
        type="submit"
        className="mt-auto"
        id="signup-btn"
        endIcon={<HowToRegIcon />}
      >
        Signup
      </Button>
      <p className="signup-check-text">
        SignedUp? Now proceed with{" "}
        <span className="signup-hyperlink" onClick={_confirmSignUp}>
          Login
        </span>
      </p>
    </Box>
  );
}

export default SignupForm;
