import React from 'react';
import {Container} from 'react-bootstrap';
import RegisterForm from '../../components/register-form/RegisterForm';
import Divider from '../../components/divider/Divider';
import './register.css'

function Register () {
    return (
        <>
        <Container>
        <h2 className='title'>Registrate</h2>
        <Divider/>
        <RegisterForm/>
        </Container>
        </>
    )
}

export default Register;