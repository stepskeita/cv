import React from "react";
import Card from "./layout/Card";
import { FaHandPointRight } from "react-icons/fa";

const Skills = ({ skils, projectTitle }) => {
  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">TECHNOLOGIES USED</h3>
      <div className="grid w-fit grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {skils.map((skill) => (
          <div
            className="text-sm p-2 flex items-center"
            key={`${projectTitle}-${skill}`}
          >
            <FaHandPointRight className="mr-2" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
