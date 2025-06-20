"use client";
import React from 'react';
import { toast } from 'react-hot-toast';
import { HiDownload, HiClipboardCopy, HiShare } from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';

const Footer = () => {
  const contacts = [
    { label: "Email", target: "eren.yigit.aydin@gmail.com" },
    { label: "Telefon", target: "+41 76 292 53 53" },
  ];

  const onHandleCopy = (target: string, label: string) => {
    navigator.clipboard.writeText(target);
    toast.success(`${label} in die Zwischenablage kopiert!`, {
      icon: "📋",
      style: {
        border: "1px solid #4f4f4f",
        background: "#1a1a1a",
        color: "#fff",
      },
    });
  };

  const footerShortcuts = [
    {
      icon: <HiDownload className="w-10 h-10" />,
      title: "Lebenslauf",
      color: "bg-teal-500",
      content: (
        <a href="/pdf/ErenAydinLebenslauf.pdf" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
          Hier herunterladen
        </a>
      ),
    },
    {
      icon: <HiClipboardCopy className="w-10 h-10" />,
      title: "Kontakt",
      color: "bg-indigo-500",
      content: (
        <div className="flex flex-col gap-2">
          {contacts.map(contact => (
            <button
              key={contact.label}
              onClick={() => onHandleCopy(contact.target, contact.label)}
              className="text-sm font-semibold hover:underline"
            >
              {contact.label} kopieren
            </button>
          ))}
        </div>
      ),
    },
    {
      icon: <HiShare className="w-10 h-10" />,
      title: "Soziale Medien",
      color: "bg-fuchsia-500",
      content: (
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/yigiterenaydin" target="_blank" rel="noopener noreferrer" title="GitHub">
            <SiGithub className="w-8 h-8 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.instagram.com/eren_zhhh/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <SiInstagram className="w-8 h-8 hover:opacity-80 transition-opacity" />
          </a>
        </div>
      ),
    }
  ];

  return (
    <footer className="w-full py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {footerShortcuts.map((shortcut) => (
            <div key={shortcut.title} className={`${shortcut.color} rounded-3xl p-6 flex flex-col justify-between h-48 text-white text-center`}>
              <div className="flex justify-center">{shortcut.icon}</div>
              <h3 className="font-bold text-xl">{shortcut.title}</h3>
              <div>{shortcut.content}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;