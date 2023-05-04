import LogoEntreprise from "../assets/logo.entreprise.png";
import { Link } from "react-router-dom";
import { EmployeeForm } from "../components/form";
import "../styles/home.css";

/**
 * Home page
 * @returns {JSX.Element}
 */

export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-header">
          <img
            loading="eager"
            className="home-img"
            src={LogoEntreprise}
            alt="logo-entreprise"
          ></img>
          <Link to="/employees">
            <h3>View Current Employees</h3>
          </Link>
        </div>
        <EmployeeForm />
      </div>
    </section>
  );
}
