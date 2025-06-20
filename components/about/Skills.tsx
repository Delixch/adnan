"use client";

import { useState } from "react";

import { FrontEndStacks } from "./stacks/FrontEndStacks";
import { BackEndStacks } from "./stacks/BackEndStacks";
import { OtherStacks } from "./stacks/OtherStacks";

export const Skills = () => {
  const [menu, setMenu] = useState<number>(1);

  const stacks = [
    { title: "Sprachkenntnisse", menu: 1 },
    { title: "Interessen", menu: 2 },
    { title: "Referenzen", menu: 3 },
  ];

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <p className="font-bold text-transparent text-3xl lg:text-4xl mb-2 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Hier sind meine Fähigkeiten und Kompetenzen.
      </p>

      <hr className="w-96 mb-6 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <div className="grid grid-cols-3 mb-6 w-full px-4">
        {stacks.map((stack) => (
          <div key={stack.menu}>
            <button
              className={
                menu === stack.menu
                  ? "rounded-sm w-full py-3 border border-borderColor bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transition-all duration-300"
                  : "rounded-sm w-full py-3 border border-borderColor bg-black text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white transition-all duration-300"
              }
              onClick={() => setMenu(stack.menu)}
            >
              <p
                className={
                  menu === stack.menu
                    ? "text-white hover:text-gray-200"
                    : "text-white"
                }
              >
                {stack.title}
              </p>
            </button>
          </div>
        ))}
      </div>

      {/* === GÖSTERİM ALANI === */}
      {menu === 3 ? (
        <div className="w-full px-4 mb-12">
          <OtherStacks />
        </div>
      ) : (
        <div className="grid grid-cols-3 lg:grid-cols-5 w-full gap-4 text-4xl md:text-5xl text-primary px-4 mb-12">
          {menu === 1 ? <FrontEndStacks /> : <BackEndStacks />}
        </div>
      )}
    </div>
  );
};
