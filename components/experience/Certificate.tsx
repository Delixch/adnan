"use client";

import CustomButton from "../shared/CustomButton";
import Image from "next/image";

interface ICertif {
  name?: string;
  from?: string;
  issued?: string;
  credential?: string;
  img?: string;
  title: string;
  link: string;
}

export const Certificate = () => {
  const expertCerficiates = [
    {
      name: "Zweite Klasse der Sekundarschule",
      from: "Zeugnis des 1. Semesters der 2. Klasse der Sekundarschule",
      issued: "Ausgestellt im Februar 2025",
      credential: "",
      title: "Go to Credential Page💳",
      link: "/pdf/SekundarSchuleZeugnisse2sek.pdf",
      img: "/certif/Zeu21.png",
    },
    {
      name: "Erste Klasse der Sekundarschule",
      from: "Mein Zeugnisse des ersten Sekundarstufe",
      issued: "Ausgestellt im Jahr 2024",
      credential: "",
      title: "Go to Credential Page💳",
      link: "/pdf/SekundarSchuleZeugnisse1sek.pdf",
      img: "/certif/Zeu1.png",
    },
  ];

  // PDF veya linki direkt indir veya aç
  const handleDirectDownload = (certif: ICertif) => {
    const isPdf = certif.link.endsWith(".pdf");
    if (isPdf) {
      const aTag = document.createElement("a");
      aTag.href = certif.link;
      aTag.setAttribute("download", "");
      aTag.setAttribute("target", "_blank");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } else {
      window.open(certif.link, "_blank");
    }
  };

  return (
    <div className="mt-8 w-full max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="font-extrabold text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 mb-4">
          Meine Zeugnisse
        </h2>

        <div className="w-72 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-6"></div>

        <p className="text-gray-800 text-lg lg:text-xl max-w-2xl mx-auto">
          Zeugnisse, die ich während meiner Schulzeit erhalten habe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {expertCerficiates.map((expert) => (
          <div
            key={expert.img}
            className="border-2 border-sky-500 bg-sky-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-sky-200 group transform hover:scale-105"
          >
            <div className="bg-sky-200 flex justify-center items-center border-b border-sky-500">
              <Image
                src={expert.img}
                alt={expert.name || "Certificate"}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="font-bold text-lg lg:text-xl text-sky-800 group-hover:text-sky-800">
                {expert.name}
              </h3>
              <p className="text-sky-700 group-hover:text-sky-700 text-sm lg:text-base">
                {expert.from}
              </p>
              <p className="text-sky-600 group-hover:text-sky-600 text-sm lg:text-base">
                {expert.issued}
              </p>
              {expert.credential && (
                <p className="text-sky-600 group-hover:text-sky-600 text-sm lg:text-base">
                  {expert.credential}
                </p>
              )}

              <CustomButton
                btnType="button"
                title="Zeugnis ansehen und herunterladen"
                containerStyles="w-full mt-4 border-sky-500 bg-sky-200 hover:bg-sky-300 hover:shadow-lg transition-all duration-300 rounded-lg py-3"
                textStyles="text-sky-800 font-semibold"
                onClick={() => handleDirectDownload(expert)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};