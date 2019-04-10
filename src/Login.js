import React from "react";
import  {Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import "./Login.css";

const Login = () => {
    return (
        <div className="Login">
            <h1 >Login</h1>
            <br></br>
            <br></br>
            <br></br>
            <form >
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value="email"

                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value="password"
                        type="password"
                    />
                </FormGroup>
                <Button variant="primary"
                    block
                    bsSize="large"
                    type="submit"
                >
                    Login
                </Button>

            </form>
        </div>

    );
};

export default Login;