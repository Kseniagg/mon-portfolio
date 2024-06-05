import project01 from "./../img/projects/01.png";
import project02 from "./../img/projects/02.png";
import project03 from "./../img/projects/03.png";

const projects = [
    {
        id: 1,
        title: 'Nourrir mon ami',
        skills: 'React, Node.js, MySQL, Redux',
        img: project01,
        gitHubLink: 'https://github.com/Kseniagg/nourrirmonami',
        site: 'https://nourrirmonami.vercel.app/',
    },
    {
        id: 2,
        title: 'DataViz',
        skills: 'JavaScript, d3.js',
        img: project02,
    },
    {
        id: 3,
        title: 'Psychologue',
        skills: 'JavaScript, React',
        img: project03,
        gitHubLink: 'https://github.com/Kseniagg/psychologue',
        site: 'https://psychologue.vercel.app/',
    },
];

export { projects }