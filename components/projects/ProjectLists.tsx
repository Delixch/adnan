"use client";

import { useState } from 'react';
import Image from "next/image";
import { SiReact, SiPython, SiOpenai, SiSharp, SiUnity } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoHtml5,
} from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

interface ProjectListsProps {
  headingColor?: string;
}

export const ProjectLists: React.FC<ProjectListsProps> = ({ headingColor }) => {
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  const handleLike = (projectName: string) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [projectName]: (prevLikes[projectName] || 0) + 1
    }));
  };
  
  const projects = [
    {
      name: "Zürcher Kantonalbank ",
      description:
        "Einblick in die Zürcher Kantonalbank und ihre Ausbildungswelt, erste Erfahrungen in der Informatik, Gestaltung einer einfachen Website mit HTML/CSS sowie Austausch mit Lernenden, Mitarbeitenden und Ausbildungsverantwortlichen.",
      link: "/certif/KB5.pdf",
      img: "/project/KB.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "E. Weber & Cie AG  ",
      description:
        "Während des Schnuppertags erhielt ich einen vielseitigen Einblick in die kaufmännischen Abläufe eines großen Unternehmens – insbesondere in die Bereiche Kundendienst, Buchhaltung, Einkauf, Marketing und Verkauf.",
      link: "/certif/Eweber.pdf",
      img: "/project/EW.png",
      stacks: [
        {
          name: "C#",
          logo: <SiSharp className="text-white w-7 h-7" />,
        },
        {
          name: "Unity",
          logo: <SiUnity className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Zürcher Kantonalbank.",
      description:
        "Informationsveranstaltung Informatik & Entwicklung digitales Business.",
      link: "/certif/KB4.pdf",
      img: "/project/KB2.png",
      stacks: [
        {
          name: "Java",
          logo: <BiLogoJava className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Sunrise GmbH",
      description:
        " Teilnahme am informationstag mit Fokus auf Einblicke in die Telekommunikationsbranche.",
      link: "/certif/Sun.pdf",
      img: "/project/SUN.png",
      stacks: [
        {
          name: "CSS",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },
        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "HTML",
          logo: <BiLogoHtml5 className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Zürcher Kantonalbank",
      description:
        "Informationsveranstaltung Informatik & Entwicklung digitales Business.",
      link: "/certif/KB2.pdf",
      img: "/project/KB3.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Zürcher Kantonalbank",
      description:
        "Informationsveranstaltung KV Branche Bank & Mediamatik.",
      link: "/certif/KB1.pdf",
      img: "/project/KB4.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Post Immobilien AG, Zürich",
      description:
        " Einblick in die kaufmännischen Abläufe eines grossen Unternehmens.",
      link: "/certif/kita.pdf",
      img: "/project/PO.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Kita Bärlis Oerlikon",
      description:
        " Unterstützung bei der Betreuung der Kinder (Baby bis 3 jährige). Hilfe beim Aufräumen und Organisieren von Materialien",
      link: "/certif/kita.pdf",
      img: "/project/KITA.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Ergon Software",
      description:
        "Einblick in die ICT-Lehrberufe und Applikationsentwicklung bei Ergon Informatik AG, inklusive Voraussetzungen, Auswahl, praktische Übungen und Austausch mit Lernenden.",
      link: "/certif/Ergon.pdf",
      img: "/project/ERGON.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
      ],
    },
  ];

  // PDF ise direkt indir, değilse yeni sekmede aç
  const onHandleClick = (link: string) => {
    if (link.endsWith(".pdf")) {
      const aTag = document.createElement("a");
      aTag.href = link;
      aTag.setAttribute("download", "");
      aTag.setAttribute("target", "_blank");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="mt-2 w-full self-center flex flex-col items-center justify-center">
      <h1 className={`text-4xl font-bold mb-2 text-center ${headingColor}`}>
        Projekte
      </h1>

      <hr className="w-96 mb-6 p-1 bg-gradient-to-r from-orange-400 to-orange-600 border-none rounded-sm" />

      <p className="text-gray-800 text-base lg:text-xl text-center">
        Meine bisherigen Schnupperlehren
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-4/5 mt-6">
        {projects.map((project) => (
          <div
            key={project.img}
            className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300 group">
            <div
              className="relative flex justify-center items-center cursor-pointer"
              onClick={() => onHandleClick(project.link)}>
              <Image
                src={project.img}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-72 object-cover rounded-t-2xl group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 rounded-t-2xl">
                <span className="text-white text-lg font-bold bg-black bg-opacity-60 px-4 py-2 rounded-md">
                  Dokument ansehen 🔗
                </span>
              </div>
            </div>
            <div className="flex flex-col px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-xl text-white">
                  {project.name}
                </p>

                <div className="flex items-center justify-end gap-2">
                  {project.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="w-8 h-8 bg-orange-800/70 border border-orange-400/50 rounded-full flex items-center justify-center"
                      title={stack.name}>
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-orange-100 text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-end items-center mt-4">
                <button 
                  onClick={() => handleLike(project.name)}
                  className="flex items-center gap-2 text-white bg-orange-800/70 border border-orange-400/50 rounded-full px-4 py-2 transition-transform hover:scale-110"
                >
                  <FaHeart className="text-red-500" />
                  <span className="font-semibold text-sm">{likes[project.name] || 0}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};