import React, { Component } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {

    render(){
        return (
            <Card>
                <CardBody className="shadow-lg">
                    <Form>
                        <FormGroup>
                            <Input type="text" name="username" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" placeholder="Password" />
                        </FormGroup>
                        <Button className="btn btn-lg btn-block btn-dark">Login</Button>
                        <hr />
                        <Button className="btn btn-lg btn-block btn-success">Create New Account</Button>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default Login;