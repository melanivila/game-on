import React from 'react'
import {Dropdown} from 'react-bootstrap'
import '../navbar.styles.css'
import useUser from './context/useUser';
import { useNavigate } from "react-router-dom";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="Profile"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {<img className='profile-button' src='./icon-account.png' alt="Profile"></img>}
      {children}
    </a>
  ));
  
  function ProfileMenu () {
    let navigate = useNavigate();
    const {isLogged, logout} = useUser()

    const handleClick = () => {
      logout()
      navigate("/Home")
    }

 return(
    <>
    <Dropdown align="end">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>
    {
    isLogged 
    ?  <Dropdown.Menu>
        <Dropdown.Item className='link-style' href="/MyProfile">Mi Perfil</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item className='link-style' href='/Wishlist'>Lista de Deseados</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item className='link-style' href='/Home' onClick={handleClick}>Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
      : <Dropdown.Menu>
        <Dropdown.Item className='link-style' href="/Register">Registrarse</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item className='link-style' href='/Login'>Iniciar Sesión</Dropdown.Item>
        </Dropdown.Menu>
      }
    </Dropdown>
    </>
);
}

  export default ProfileMenu;