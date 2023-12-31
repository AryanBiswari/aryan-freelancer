import React from "react";

import styles from "./PricingCard.module.css";
import { getImageUrl } from "../../utils";

export const PricingCard = ({
  project: { title, imageSrc, description, skills },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        width="288" height="224"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {/* <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
      </div> */}
    </div>
  );
};
