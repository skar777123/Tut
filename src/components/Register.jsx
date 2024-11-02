import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);
  return (
    <div
      className="register"
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Registeration</h1>

      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {alert1 === true && <p style={{ color: "red" }}>username needed</p>}
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {alert2 === true && <p style={{ color: "red" }}>email needed</p>}

        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {alert3 === true && <p style={{ color: "red" }}>password needed</p>}

        <br />

        <button
          onClick={() => {
            if (name === "") {
              setAlert1(true);
              // alert("Name should be field");
            } else if (email === "") {
              setAlert2(true);
              // alert("Email should be field");
            } else if (password === "") {
              setAlert3(true);
              // alert("password should be field");
            } else {
              console.log({
                name: name,
                email: email,
                password: password,
              });

              localStorage.setItem("profiler", "qwertyuiop");

              alert("Succefully Registered");
              window.location.href = "/";
            }
          }}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
