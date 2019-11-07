import React, { useState, useContext } from "react";
import alertContext from "../../context/alert/alertContext";

const Register = () => {
  const AlertContext = useContext(alertContext);
  const { setAlert } = AlertContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: ""
  });

  const { name, email, password, confPassword } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Please Enter all fields", "danger");
    } else if (password !== confPassword) {
      setAlert("Password do not match", "danger");
    } else {
      console.log(user);
    }
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confPassword">Confirm Password</label>
          <input
            type="password"
            name="confPassword"
            id="confPassword"
            value={confPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            minLength="6"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
