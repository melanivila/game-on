import React from 'react';
import Divider from '../../components/divider/Divider';
import WishlistList from '../../components/wishlist/WishlistList';
import { Container } from 'react-bootstrap';
import './wishlist.css';

function Wishlist () {

    return (
        <>
        <h2 className='title-style'>Lista de deseados ❤</h2>
        <Divider/>
        <Container>
            <WishlistList/>
        </Container>
        </>
    )
}

export default Wishlist;