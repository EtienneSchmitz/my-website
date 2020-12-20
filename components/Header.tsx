import React from "react";
import { GiSkills } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { AiTwotoneExperiment, AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="grid grid-cols-12 grid-rows-1	 p-6 bg-blue-500">
      <div className="col-start-1 col-end-5 text-white">Etienne Schmitz</div>
      <div className="col-start-5 col-end-12 flex justify-between">
        <Link href="/">
          <a className="flex items-center text-teal-lighter hover:text-white">
            <AiOutlineInfoCircle />
            <span className="ml-2">Mes informations</span>
          </a>
        </Link>
        <Link href="/skills">
          <a className="flex items-center text-teal-lighter hover:text-white">
            <GiSkills />
            <span className="ml-1">Mes compétences</span>
          </a>
        </Link>
        <Link href="/study">
          <a className="flex items-center text-teal-lighter hover:text-white">
            <FaUniversity />
            <span className="ml-1">Mes études</span>
          </a>
        </Link>
        <Link href="/experiences">
          <a className="flex items-center text-teal-lighter hover:text-white">
            <AiTwotoneExperiment />
            <span className="ml-1">Mes expériences</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
