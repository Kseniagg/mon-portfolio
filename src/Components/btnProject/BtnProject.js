import "./style.css";
import siteIcon from "./../../img/icons/favicon-dog.png";

const BtnProject = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline btn__project">
            <img className="icon" src={siteIcon} alt="icon" />
            Lien site
        </a>
    );
}

export default BtnProject;