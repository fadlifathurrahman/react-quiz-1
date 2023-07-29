import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext, ThemeContext } from "../../App";

export default function Contact() {
  const { lang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  const connection = [
    {
      id: 1,
      icon: <BsGithub size={20} />,
      link: "https://github.com/fadlifathurrahman",
    },
    {
      id: 2,
      icon: <BsLinkedin size={20} />,
      link: "https://www.linkedin.com/in/muhammad-fadli-fathurrahman-21a297217/",
    },
    {
      id: 3,
      icon: <AiFillInstagram size={20} />,
      link: "https://www.instagram.com/fadli.ft/",
    },
  ];
  const stringsHead = {
    id: {
      text: "Mari Terhubung",
    },
    en: {
      text: "Lets get connected",
    },
  };

  return (
    <div
      className={
        theme === "dark"
          ? "border-4 border-slate-100"
          : "border-4 border-slate-800"
      }
    >
      <div
        className="w-screenp-6 flex flex-col justify-end p-3
       "
      >
        <img
          src="/batik.png"
          className="h-24 w-32
          lg:h-24"
        />
        <div
          className="text-white text-lg bg-cyan-950 bg-opacity-70 p-4 font-bold -mt-12
          lg:text-2xl
          md:text-1xl
          sm:text-1xl"
        >
          <p className="lg:text-3xl">{stringsHead[lang].text}</p>
          <div className="flex flex-row pt-4 justify-evenly">
            {connection.map((acc) => (
              <Link
                key={acc.id}
                to={acc.link}
                target="_blank"
                className="bg-slate-400 p-4 text-gray-800"
              >
                {acc.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
