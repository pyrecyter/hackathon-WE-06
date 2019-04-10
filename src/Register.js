import React from "react";
import  {Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import "./Register.css";

const Register = () => {
    return (

        <div className="Register">
            <h1 >Sign Up</h1>
            <br></br>
            <br></br>
            <br></br>

            <form >
            <FormGroup controlId="firstname" bsSize="large">
                <FormLabel>FirstName</FormLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value="firstname"
                />
            </FormGroup>
            <FormGroup controlId="lastname" bsSize="large">
                <FormLabel>LastName</FormLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value="lastname"
                />
            </FormGroup>
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
            <FormGroup controlId="confirmPassword" bsSize="large">
                <FormLabel>Confirm Password</FormLabel>
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
                Register
            </Button>

        </form>
        </div>

    );
};

export default Register;