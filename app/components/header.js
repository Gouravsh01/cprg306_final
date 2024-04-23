"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-4 flex justify-around">
      <Link href="#education">
        <div
          className={`cursor-pointer ${
            activeTab === "education" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </div>
      </Link>
      <Link href="#skills">
        <div
          className={`cursor-pointer ${
            activeTab === "skills" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </div>
      </Link>
      <Link href="#experience">
        <div
          className={`cursor-pointer ${
            activeTab === "experience" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </div>
      </Link>
      <Link href="#projects">
        <div
          className={`cursor-pointer ${
            activeTab === "projects" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </div>
      </Link>
      <Link href="./components">
        <div
          className={`cursor-pointer ${
            activeTab === "contact" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("contact")}
        >
          Contact Me
        </div>
      </Link>
    </header>
  );
};

export default Header;
