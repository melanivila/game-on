import { useContext, useState, useEffect } from "react";
import Context from "../navbar/Profile Menu/context/UserContext";
import "./myprofile.css";

function ProfileData() {
  const { email, setEmail } = useContext(Context);
  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const fetchDetails = async () => {
    setEmail(email);
    const response = await fetch(
      `https://game-on-server.herokuapp.com/userProfile/${email}`
    );
    const data = await response.json();
    setValues(data[0]);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <ul className="profile-list my-auto">
        <li>
          Usuario: <span>{values.username}</span>
        </li>
        <li>
          Nombre: <span className="text-capitalize">{values.firstname}</span>
        </li>
        <li>
          Apellido: <span className="text-capitalize">{values.lastname}</span>
        </li>
        <li>
          E-mail: <span>{values.email}</span>
        </li>
      </ul>
    </>
  );
}

export default ProfileData;
