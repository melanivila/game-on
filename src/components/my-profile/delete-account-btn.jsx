import { useEffect, useState, useContext } from "react";
import "./myprofile.css";
import { Link } from "react-router-dom";
import Context from "../navbar/Profile Menu/context/UserContext";
import axios from "axios";
import useUser from "../navbar/Profile Menu/context/useUser";

const DeleteAccountBtn = () => {
  const { email, setEmail } = useContext(Context);
  const { logout } = useUser();

  const handleClick = async () => {
    setEmail(email);
    await axios
      .delete(`https://game-on-server.herokuapp.com/deleteAccount/${email}`)
      .then(() => {
        alert("La cuenta ha sido eliminada con éxito");
        logout();
      });
  };
  return (
    <button className="delete-account-btn" type="submit" onClick={handleClick}>
      Eliminar cuenta 🗑{" "}
    </button>
  );
};

export default DeleteAccountBtn;
