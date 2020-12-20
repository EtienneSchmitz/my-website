import React, { ReactElement } from "react";

import Link from "next/link";
import { IconType } from "react-icons/lib";

interface CategoryProps {
  icon: ReactElement<IconType>;
  name: string;
  url: string;
}

export default function Category(props: CategoryProps) {
  return (
    <Link href={props.url}>
      <a className="flex items-center text-teal-lighter hover:text-white">
        {props.icon}
        <span className="ml-2">{props.name}</span>
      </a>
    </Link>
  );
}
