import React from 'react';
import { Link } from 'react-router-dom';
import './wishlist-button.css';


function WishlistBtn () {
    
    return (
<>
    <Link to="/Wishlist" className='wishlist-btn' type="button">
        Lista de deseados ❤
    </Link> 
</>
 )
}

export default WishlistBtn;