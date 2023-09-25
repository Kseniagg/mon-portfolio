import { Link } from "react-router-dom";
import "./style.css";
import github from "./../../img/icons/gitHub.svg";
import linkedin from "./../../img/icons/linkedIn.svg";
import CV from "./../../files/CVKseniiaGladkova.pdf";

const Header = () => {
    return (
        < header className="header" >
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Bonjour, je m'appelle </strong></h1>
                <h1 className="header__title name"> <em>Kseniia</em><br />
                    Développeuse Frontend
                </h1>


                <div className="header__text">
                    <p>passionnée par l'apprentissage et la création</p>
                </div>
                <Link to={CV} target="_blank" className="btn" download="CV_Kseniia_Gladkova">Télécharger CV</Link>
                <ul className="social">
                    <li className="social__item"><Link to="https://github.com/Kseniagg" target="_blank"><img src={github} alt="Link" /></Link></li>
                    <li className="social__item"><Link to="https://www.linkedin.com/in/kseniia-gladkova/" target="_blank"><img src={linkedin} alt="Link" /></Link></li>
                </ul>
            </div>
        </ header >
    );
}

export default Header;