"use client";

import { Welcome } from "@/components/home/Welcome";
import { Status } from "@/components/home/Status";
import { Info } from "@/components/about/Info";
import Image from "next/image";
import { Skills } from "@/components/about/Skills";
import { Journey } from "@/components/experience/Journey";
import { Certificate } from "@/components/experience/Certificate";
import { ProjectLists } from "@/components/projects/ProjectLists";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export default function Home() {
  return (
    <main className="container mx-auto px-4 lg:px-8">
      <section id="home" className="min-h-screen flex items-center pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="w-full lg:w-1/2">
          <Welcome />
          <div className="mt-8">
            <Status />
          </div>
        </div>
      </section>
      
      <section id="about" className="py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/2 text-justify">
            <Info />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-16">
            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border-2 border-borderColor bg-tertiary">
              <Image
                src="/photo/Eren.png"
                alt="Eren"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="experience" className="py-16 lg:py-20">
        <Journey />
        <Certificate />
      </section>
      
      <section id="projects" className="py-16 lg:py-20">
        <ProjectLists />
      </section>
      
      <section id="skills" className="py-16 lg:py-20">
        <Skills />
      </section>
      
      <ScrollToTopButton />
    </main>
  );
}