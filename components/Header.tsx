import React from "react";
import { GiSkills } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { AiTwotoneExperiment, AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

import styles from "../styles/Header.module.css";
import Category from "./Header/Category";

export default function Header() {
  return (
    <nav className="flex justify-between p-4 bg-blue-500">
      <div className={styles.text_logo}>
        <Link href="/">
          <a>Étienne SCHMITZ</a>
        </Link>
      </div>
      <div className="flex justify-between w-3/5">
        <Category
          icon={<AiOutlineInfoCircle />}
          name="Mes informations"
          url="/"
        ></Category>
        <Category
          icon={<GiSkills />}
          name="Mes compétences"
          url="/skills"
        ></Category>
        <Category
          icon={<FaUniversity />}
          name="Mes études"
          url="/study"
        ></Category>
        <Category
          icon={<AiTwotoneExperiment />}
          name="Mes experiences"
          url="/experience"
        ></Category>
      </div>
    </nav>
  );
}
