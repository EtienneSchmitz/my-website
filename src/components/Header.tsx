import React from "react";

import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/** Person Icone */}
      Etienne Schmitz
      <Link href="/">
        <a>Mes informations</a>
      </Link>
      <Link href="/skills">
        <a>Mes compétences</a>
      </Link>
      <Link href="/study">
        <a>Mes études</a>
      </Link>
      <Link href="/experiences">
        <a>Mes expériences</a>
      </Link>
    </div>
  );
}
