import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "3D game",
        description:
            "A 3d game with terraingeneration using perlin noise",
        image: "/projects/3d-game.png",
        available: true,
    },
    {
        id: 1,
        name: "Star Wars Wiki",
        description:
            "Developed a wikipedia for Star Wars",
        technologies: [SiReact],
        techNames: ["React"],
        techLinks: ["https://reactjs.org/"],
        github: "https://github.com/Lucas8448/StarWarsWikiL",
        demo: "https://star-wars-wiki-ashy.vercel.app/",
        image: "/projects/starwarswiki.png",
        available: true,
    },
];
