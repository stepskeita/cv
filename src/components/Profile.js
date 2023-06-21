import React from "react";
import {
  FaEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaLocationArrow,
  FaSuitcase,
} from "react-icons/fa";
import Card from "./layout/Card";
const Profile = () => {
  const demographicData = [
    {
      key: <FaSuitcase className="mr-2 text-xl" />,
      value: "JAVASCRIPT DEVELOPER",
    },
    {
      key: <FaLocationArrow className="mr-2 text-xl" />,
      value: "ESSAU, THE GAMBIA.",
    },
    {
      key: <FaLinkedinIn className="mr-2 text-xl" />,
      value: (
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="https://www.linkedin.com/in/stepskeita/"
        >
          stepskeita
        </a>
      ),
    },
    {
      key: <FaGithubAlt className="mr-2 text-xl " />,
      value: (
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="https://github.com/stepskeita"
        >
          stepskeita
        </a>
      ),
    },
    {
      key: <FaEnvelope className="mr-2 text-xl " />,
      value: "stepskeita@gmail.com",
    },
  ];
  return (
    <Card>
      <h2 className="font-extrabold text-2xl mb-5 text-center">
        Alieu Keita ({new Date().getFullYear() - 1999})
      </h2>

      <img
        src="img/headshot.png"
        alt="Alieu Keita"
        className="w-64 h-64 rounded-full object-scale-down mx-auto mb-4"
      />
      <table className="mx-auto ">
        {demographicData.map((data) => (
          <tr key={data.value}>
            <td className="p-2">{data.key}</td>
            <td className="p-2">{data.value}</td>
          </tr>
        ))}
      </table>
    </Card>
  );
};

export default Profile;
