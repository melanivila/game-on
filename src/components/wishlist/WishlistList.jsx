import { TiDeleteOutline } from "react-icons/ti";
import "../../pages/Wishlist/wishlist.css";
import { useState, useEffect, useContext } from "react";
import Context from "../navbar/Profile Menu/context/UserContext";
import useUser from "../navbar/Profile Menu/context/useUser";
import axios from "axios";

const WishlistList = () => {
  const [wishlist, setWishlist] = useState([{}]);
  const { email, setEmail } = useContext(Context);
  const { isLogged } = useUser();

  const fetchDetails = async () => {
    if (isLogged) {
      setEmail(email);
      const response = await fetch(
        `https://game-on-server.herokuapp.com/userWishlist/${email}`
      );
      const data = await response.json();
      setWishlist(data[0].wishlist);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleDelete = async (game) => {
    await axios
      .post(
        `https://game-on-server.herokuapp.com/deleteWishlistItem/${email}/${game.slug}`,
        game
      )
      .then(() => {
        alert("El juego fue eliminado con éxito");
        window.location.reload(false);
      });
  };

  return (
    <>
      {!isLogged && (
        <p className="no-results">Iniciá sesión para visualizar tu lista</p>
      )}
      {isLogged && wishlist.length > 0
        ? wishlist.map((game, id) => {
            return (
              <div className="card flex-row card-style m-4 bg-dark" key={id}>
                <img
                  className="wishlist-card-img"
                  src={
                    game.background_image
                      ? game.background_image
                      : "notfound.png"
                  }
                  alt={game.name}
                />
                <div className="card-body card-text">
                  <h5 className="card-header">{game.name}</h5>
                  <a href={game.slug} className="card-body card-text">
                    Más detalles
                  </a>
                </div>
                <button
                  className="wishlist-card-btn"
                  type="button"
                  onClick={() => handleDelete(game)}
                >
                  <TiDeleteOutline />
                </button>
              </div>
            );
          })
        : isLogged &&
          wishlist.length === 0 && (
            <p className="no-results">Aún no agregaste ningún juego</p>
          )}
    </>
  );
};

export default WishlistList;
