import React, { ReactElement } from "react";

import Link from "next/link";
import { IconType } from "react-icons/lib";

import styles from "../../styles/Header.module.css";

interface CategoryProps {
  icon: ReactElement<IconType>;
  name: string;
  url: string;
}

export default function Category(props: CategoryProps) {
  return (
    <Link href={props.url}>
      <a className={styles.category}>
        {props.icon}
        <span className="ml-2">{props.name}</span>
      </a>
    </Link>
  );
}
