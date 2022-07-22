import React, { useState, useEffect, useContext } from "react";
import "./game-data.css";
import GameScreenshots from "./GameScreenshots";
import Divider from "../divider/Divider";
import { apiKey } from "../../constants/index";
import { useParams } from "react-router-dom";
import GameGenres from "./GameGenres";
import GameConsoles from "./GameConsoles";
import GameStores from "./GameStores";
import LoadingGif from "../loading/LoadingGif";
import axios from "axios";
import Context from "../navbar/Profile Menu/context/UserContext";
import useUser from "../navbar/Profile Menu/context/useUser";

function GameData() {
  const { slug } = useParams();
  const [gameDetails, setGameDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const ratingStyle = `${
    gameDetails.rating > 3.5
      ? "good"
      : gameDetails.rating < 3.5 && gameDetails.rating > 0
      ? "bad"
      : "no"
  }-rating`;
  const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { isLogged } = useUser();
  const { email, setEmail } = useContext(Context);

  const fetchDetails = async () => {
    if (isLogged) {
      setEmail(email);
    }
    const response = await fetch(url);
    const data = await response.json();
    setGameDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const checkIfExists = async () => {
    const response = await fetch(
      `https://game-on-server.herokuapp.com/userWishlist/${email}`
    );
    const wishlist = await response.json();
    const filteredWishlist = wishlist[0].wishlist.some(
      (game) => game.slug === gameDetails.slug
    );

    if (filteredWishlist) {
      alert("El juego ya se encuentra en su lista de deseados");
    }

    if (!filteredWishlist) {
      const { name, background_image, description, slug } = gameDetails;

      const listedGame = {
        wishlist: [
          {
            name: name,
            background_image: background_image,
            description: description,
            slug: slug,
          },
        ],
      };
      const response = await axios
        .post(
          `https://game-on-server.herokuapp.com/wishlist/${email}`,
          listedGame
        )
        .catch((err) => {
          if (err && err.response) setError(err.response.data.message);
        });
      if (response && response.data) {
        setSuccess(response.data.message);
      }
    }
  };

  const handleClick = () => checkIfExists();

  if (loading) {
    return <LoadingGif />;
  }

  return (
    <>
      {gameDetails.detail === "Not found." ? (
        <p className="no-results">La página no se encuentra disponible</p>
      ) : (
        <>
          <div className="game-header">
            <h2>{gameDetails.name}</h2>
            <span className={ratingStyle}>Rating: {gameDetails.rating}</span>
            {gameDetails.website && (
              <a
                href={gameDetails.website}
                className="website-button"
                target="__blank"
              >
                Sitio oficial
              </a>
            )}
          </div>
          <Divider />
          <div className="game-data">
            <div className="game-details">
              <GameGenres url={url} />
              <div className="consoles">
                {gameDetails.released && (
                  <p>
                    <span className="release-date">Fecha de lanzamiento: </span>
                    {gameDetails.released}
                  </p>
                )}
                <GameConsoles slug={slug} />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: gameDetails.description }}
              />
              <GameStores slug={slug} />
            </div>
            <div className="game-extra">
              <GameScreenshots
                background_image={gameDetails.background_image}
              />
              {isLogged && (
                <button
                  className="custom-btn"
                  type="submit"
                  onClick={handleClick}
                >
                  Añadir a la Lista de Deseados ❤
                </button>
              )}
              <h2 className="success-message">{success}</h2>
              {!success && (
                <span className="error-message">{error ? error : ""}</span>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default GameData;
