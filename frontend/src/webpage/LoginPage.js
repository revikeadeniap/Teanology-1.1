import "./App.css";
import "../components/loginPage/LoginPage.css";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Orbit2 from "../components/loginPage/img/orbit-cover.svg";
import Mascot2 from "../components/loginPage/img/MascotHappy2.png";
import Logo from "../components/loginPage/img/Logo.svg";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Periksa jika token tersimpan di localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Token ada, alihkan ke halaman dashboard
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((response) => {
        // Login berhasil
        console.log(response.data);
  
        // Menyimpan token JWT
        const token = response.data.token;
        const role = response.data.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
  
        navigate("/dashboard");
      })
      .catch((error) => {
        // Login gagal
        console.error(error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
  
    handleLogin();
  };
  return (
    <div className="box">
      <Row>
        <Col md={6}>
          <img src={Orbit2} alt="bg-cover" className="bg-cover"></img>
          <img src={Mascot2} alt="mascot-cover" className="mascot-cover"></img>
        </Col>
        <Col md={6}>
          <img className="logo float-end" src={Logo} alt="logo-teanology" />
          <div className="login-box float-end">
            <p className="heading">Welcome Back..</p>
            <p className="sub">Please enter your email and password!</p>
            <Form onSubmit={handleSubmit}>

            <Form.Label>Email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text className="form-icon" id="basic-addon1"><i class="bi bi-person fs-5 text-muted"></i></InputGroup.Text>
                <Form.Control className="login-form"
                placeholder="Enter your email" 
                aria-label="Email" 
                aria-describedby="basic-addon1" 
                value={email}
                onChange={handleEmailChange}/>
              </InputGroup>

              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text className="form-icon" id="basic-addon1"><i class="bi bi-lock fs-5 text-muted"></i></InputGroup.Text>
                <Form.Control className="login-form"
                placeholder="Enter your password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                type="password"
                value={password}
                onChange={handlePasswordChange}/>
              </InputGroup>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="remember-me" type="checkbox" label="Remember me" />
              </Form.Group>
                <button className="button2 fw-bold" type="submit">
                  Sign In
                </button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;