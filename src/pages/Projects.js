import Project from "../Components/Project/Project";
import { projects } from "../helpers/projectsList";

const Projects = () => {
    return (
        <main className="section" id="projects">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project, i) => {
                        return (
                            <Project
                                key={i}
                                title={project.title}
                                img={project.img}
                                index={i}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects;