import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aryan</h1>
        <p className={styles.description}>
        Bringing your ideas to life online! I create user-friendly websites to help you make smart choices. Whether you need a cool website or insights for your business, I've got you covered—making tech simple for everyone!
        </p>
        <a href="mailto:aryanbiswari14@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage-m.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
