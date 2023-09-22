import { useParams } from "react-router-dom";
import BtnGitHub from "../Components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import Carousel from "../Components/carousel/Carousel";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id];

    return (
        <main className="section details">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1 details">{project.title}</h1>
                    <Carousel />
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    <BtnGitHub link={project.gitHubLink} />

                </div>
            </div>

        </main>

    );
}

export default ProjectDetails;