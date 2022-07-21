import {React, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import Divider from '../../components/divider/Divider';
import './profile.css'
import WishlistButton from '../../components/wishlist/WishlistButton';
import CardsList from  '../../components/cards/CardsList'
import { latestGames} from "../../constants";
import ProfileGif from '../../components/my-profile/profile-gif';
import ProfileData from '../../components/my-profile/profile-data';
import DeleteAccountBtn from '../../components/my-profile/delete-account-btn';
import useUser from '../../components/navbar/Profile Menu/context/useUser';

function MyProfile () {
    const {isLogged} = useUser();

    const [gameList, setGameList] = useState([]);
    
    return (
    <>
    {isLogged ? 
    <>
    <Row className="align-items-center mx-5 my-4">
        <Col className="justify-content-start">
            <h2 className='profile-title'>Mi Perfil</h2>
        </Col>
        <Col className="d-flex justify-content-end">
            <DeleteAccountBtn />
        </Col>
    </Row>
    <Divider/>
    
    <Row className="d-flex align-items-center mx-5 my-2">    
        <Col className="d-flex justify-content-start profile-data">
            <ProfileGif />
            <ProfileData/>        
        </Col>        
        <div className="d-flex justify-content-end">
            <WishlistButton/>
        </div>
    </Row>
    
    <Divider/>
    <CardsList
    title="Últimas novedades"
    gameList={gameList}
    setGameList={setGameList}
    url={latestGames}
    />
    </>
    : <p className="no-results">Iniciá sesión para acceder a tu perfil</p>
    }
    </>
    )
}

export default MyProfile;