import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../assets/emaus-connect.png";
import "./HomeAdmin.css";

export default function HomeAdmin() {
  return (
    <>
      <NavBar />
      <section className="adminPageSection">
        <section>
          <div className="adminpage-button-container">
            <Link to="/bdd-user">
              <button type="button" className="adminpage-button">
                Gérer les utilisateurs
              </button>
            </Link>
            <Link to="/admin-new-model">
              <button type="button" className="adminpage-button">
                Enregistrer un nouveau modèle
              </button>
            </Link>
            <Link to="/criteres-estimation">
              <button type="button" className="adminpage-button">
                Voir et modifier les critères d'estimation
              </button>
            </Link>
            <Link to="/user-home">
              <button type="button" className="adminpage-button">
                Estimer un téléphone
              </button>
            </Link>
          </div>
          <div className="testtkt">
            <img src={Logo} alt="logo" />
          </div>
        </section>
      </section>
    </>
  );
}
