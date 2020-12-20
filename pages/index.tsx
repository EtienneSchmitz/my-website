import React from "react";
// import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export default function Home() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div>
      <h1>{f("hello")}</h1>
      <p>{f("welcomeMessage")}</p>
      <br />
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
        officia inventore blanditiis sint iure voluptatum perferendis magnam
        modi aliquam! Possimus, delectus iste. Iste cum minus sequi voluptate
        optio officia quod.
      </p>
    </div>
  );
}
