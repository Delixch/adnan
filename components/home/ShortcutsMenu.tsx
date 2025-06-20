"use client";

import React, { useRef, createRef } from "react";
import {
  HiHome,
  HiUser,
  HiLightningBolt,
  HiBriefcase,
  HiCollection,
} from "react-icons/hi";
import Image from "next/image";

// Import all the content components
import { Welcome } from "@/components/home/Welcome";
import { Status } from "@/components/home/Status";
import { Info } from "@/components/about/Info";
import { Skills } from "@/components/about/Skills";
import { Journey } from "@/components/experience/Journey";
import { Certificate } from "@/components/experience/Certificate";
import { ProjectLists } from "@/components/projects/ProjectLists";

const shortcuts = [
  { id: "home", label: "Startseite", icon: <HiHome className="w-8 h-8" />, color: "bg-rose-500", textColor: "text-rose-500" },
  { id: "about", label: "Über mich", icon: <HiUser className="w-8 h-8" />, color: "bg-emerald-500", textColor: "text-emerald-500" },
  { id: "experience", label: "Erfahrung", icon: <HiBriefcase className="w-8 h-8" />, color: "bg-sky-500", textColor: "text-sky-500" },
  { id: "projects", label: "Projekte", icon: <HiCollection className="w-8 h-8" />, color: "bg-orange-500", textColor: "text-orange-500" },
  { id: "skills", label: "Fähigkeiten", icon: <HiLightningBolt className="w-8 h-8" />, color: "bg-amber-500", textColor: "text-amber-500" },
];

const getSectionComponent = (id: string, headingColor: string) => {
  // Pass headingColor to each component that has a title
  switch (id) {
    case "home":
      return (
        <div className="w-full lg:w-1/2">
          <Welcome headingColor={headingColor} />
          <div className="mt-8">
            <Status />
          </div>
        </div>
      );
    case "about":
      return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/2 text-justify"><Info /></div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-16">
            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border-2 border-borderColor bg-tertiary">
              <Image src="/photo/Eren.png" alt="Eren" fill className="object-cover" />
            </div>
          </div>
        </div>
      );
    case "skills": return <Skills headingColor={headingColor} />;
    case "experience": return <><Journey /><Certificate /></>;
    case "projects": return <ProjectLists headingColor={headingColor} />;
    default: return null;
  }
};

interface ShortcutsMenuProps {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

const ShortcutsMenu: React.FC<ShortcutsMenuProps> = ({ activeSection, setActiveSection }) => {
  const itemRefs = useRef(shortcuts.map(() => createRef<HTMLDivElement>()));

  const handleShortcutClick = (sectionId: string, index: number) => {
    const newActiveSection = activeSection === sectionId ? null : sectionId;
    setActiveSection(newActiveSection);

    setTimeout(() => {
      if (newActiveSection) {
        itemRefs.current[index].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100); 
  };

  return (
    <section className="p-4 md:p-8 relative">
      <h1 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-red-500 to-red-600 animate-pulse p-3 rounded-xl shadow-md border border-red-400/50 hover:animate-bounce transition-all duration-300 hover:shadow-lg hover:scale-105 h-24 flex items-center justify-center">
        Eren Aydin Kurzbefehle
      </h1>
      
      <div className="flex flex-col gap-4">
        {shortcuts.map((shortcut, index) => (
          <div key={shortcut.id} className="flex flex-col" ref={itemRefs.current[index]}>
            <div
              onClick={() => handleShortcutClick(shortcut.id, index)}
              className={`${shortcut.color} ${activeSection === shortcut.id ? 'rounded-t-3xl' : 'rounded-3xl'} p-4 flex items-center h-24 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out relative`}
            >
              <div className="mr-4">{shortcut.icon}</div>
              <span className="font-semibold text-lg">{shortcut.label}</span>

              {/* iOS Shortcuts style button */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/30 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 z-10 backdrop-blur-sm">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            {activeSection === shortcut.id && (
              <div className="bg-white p-6 rounded-b-3xl text-gray-900 shadow-lg">
                {getSectionComponent(shortcut.id, shortcut.textColor)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortcutsMenu; 