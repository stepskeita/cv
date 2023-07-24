import React from "react";
import Card from "./layout/Card";
import Skills from "./Skills";

const Projects = () => {
  const projects = [
    {
      title: "STIGA OUTWEAR",
      link: "https://stigaoutwear.com",
      details:
        "Stiga Outwear is the number one online sneaker store in The Gambia.",
      image: "img/stigaoutwear.png",
      skills: [
        "JAVASCRIPT",
        "REACT.JS",
        "NODE.JS",
        "TAILWIND CSS",
        "MYSQL",
        "REDUX",
        "EXPRESS.JS",
      ],
    },

    {
      title: "MARIAMA GAYE",
      link: "https://mariamagaye.com",
      details:
        "Mariama Gaye is a person website/blog for a Gambia-Swedish model",
      image: "img/mariamagaye.png",
      skills: ["WORDPRESS", "HTML", "CSS3", "MYSQL", "PHP"],
    },

    {
      title: "STEELDALAL",
      link: "https://steeldalal.com",
      details:
        "Steeldalal is a B2B company that specializes in the marketing of various types of steels and metals.",
      image: "img/steeldalal.png",
      skills: [
        "JAVASCRIPT",
        "REACT.JS",
        "NODE.JS",
        "MATERIAL UI",
        "MYSQL",
        "REDUX",
        "EXPRESS.JS",
        "CSS3",
      ],
    },
    {
      title: "FA2BEE INC.",
      link: "https://peaceful-muffin-848fc4.netlify.app/",
      details: (
        <>
          FA2BEE Inc. is the parent company of the FA2BEE brand, which is
          founded by{" "}
          <a
            href="https://peaceful-muffin-848fc4.netlify.app/fatou-b-ceesay.html"
            target="_blank"
            rel="noreferrer"
          >
            FATOU B. CEESAY
          </a>
        </>
      ),
      image: "img/fa2bee.png",
      skills: [
        "HTML",
        "CSS",
        "NODE.JS",
        "JQUERY",
        "TAILWIND CSS",
        "JAVASCRIPT",
      ],
    },

    {
      title: "D-LIB",
      link: "https://github.com/stepskeita/digital-library",
      details:
        "D-LIB is a digital library for schools and education ministries to host pdf documents and can accessed and read by anyone that access the public domain of the library.",
      image: "img/d-lib.png",
      skills: [
        "JAVASCRIPT",
        "REACT.JS",
        "NODE.JS",
        "TAILWIND CSS",
        "MONGODB",
        "REDUX",
        "EXPRESS.JS",
      ],
    },
  ];
  return (
    <Card>
      <h2 className="font-extrabold text-2xl mb-5">Projects</h2>
      {projects.map((project) => (
        <div key={project.title} className="my-7 mb-10">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <img
              loading="lazy"
              src={project.image}
              alt={project.title}
              className="w-full mb-2"
            />
          </a>
          <p className="mb-4">{project.details}</p>
          <Skills projectTitle={project.title} skils={project.skills} />
         {project.link && (
            <a
              target="_blank"
              rel="noreferrer"
              className="block w-fit underline"
              href={project.link}
            >
              Visit {project.title}
            </a>
          )} 
        </div>
      ))}

      <div className="w-fit mt-7">
        <a
          target="_blank"
          rel="noreferrer"
          className=" bg-black text-white px-5 py-3 hover:bg-black/70 transition-colors duration-300"
          href="https://github.com/stepskeita"
        >
          For More Of My Projects
        </a>
      </div>
    </Card>
  );
};

export default Projects;
