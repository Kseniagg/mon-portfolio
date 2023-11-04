import { useParams } from "react-router-dom";
import BtnGitHub from "../Components/btnGitHub/BtnGitHub";
import BtnProject from "../Components/btnProject/BtnProject";
import { projects } from "./../helpers/projectsList";
import Carousel from "../Components/carousel/Carousel";
import datavizGif from "../img/projects/dataviz-gif.gif";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id];

    return (
        <main className="section details">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1 details">{project.title}</h1>
                    {project.id === 1 && (<Carousel />)}
                    {project.id === 2 && (
                        <img src={datavizGif} alt="datavizGif" />
                    )}
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    {project.id === 1 && (
                        <div className="project-details__box-btn">
                            <BtnGitHub link={project.gitHubLink} />
                            <BtnProject link={project.site} />
                        </div>
                    )}

                </div>
            </div>

        </main>

    );
}

export default ProjectDetails;