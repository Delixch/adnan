"use client";

import {
  FaUtensils,
  FaSwimmer,
  FaCamera,
  FaTree,
  FaMusic,
  FaWalking,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";
import { MdSportsMartialArts } from "react-icons/md";
import { FiCode } from "react-icons/fi";
import { toast } from "react-hot-toast";

export const BackEndStacks = () => {
  const hobbies = [
    { title: "Kochen", icon: <FaUtensils /> },
    { title: "Kung-Fu", icon: <MdSportsMartialArts /> },
    { title: "Schwimmen", icon: <FaSwimmer /> },
    { title: "Musik hören", icon: <FaMusic /> },
    { title: "Natur", icon: <FaTree /> },
    { title: "Fotografieren", icon: <FaCamera /> },
    { title: "Reisen", icon: <FaWalking /> },
    { title: "Word", icon: <FaFileWord /> },
    { title: "Excel", icon: <FaFileExcel /> },
    { title: "Programmieren", icon: <FiCode /> },
  ];

  const onHandleClick = (title: string) => {
    toast.success(title.toUpperCase(), {
      icon: "🔥",
      style: {
        border: "1px solid #3e3e3e",
        background: "#111",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "uppercase",
      },
    });
  };

  return (
    <>
      {hobbies.map((hobby) => (
        <div
          key={hobby.title}
          className="p-3 md:p-4 border border-borderColor bg-tertiary rounded-sm cursor-pointer transition-all duration-300 hover:border-transparent hover:shadow-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 group"
          onClick={() => onHandleClick(hobby.title)}
        >
          <p
            className="flex justify-center items-center text-gray-400 text-5xl group-hover:text-white transition-colors duration-300"
            title={hobby.title}
          >
            {hobby.icon}
          </p>
        </div>
      ))}
    </>
  );
};
