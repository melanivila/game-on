import Divider from "../../components/divider/Divider";
import LoginForm from "../../components/login/login-form";
import { Container } from "react-bootstrap";
import "./login.css"

function Login () {
    return (
        <>
        <Container className="container-style">
        <h2 className='title'>Iniciar sesión</h2>
        <Divider/>
        <LoginForm/>
        </Container>
        </>
    )
}

export default Login;