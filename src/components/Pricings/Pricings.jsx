import React from "react";

import styles from "./Pricings.module.css";

import projects from "../../data/pricing.json";
import { PricingCard } from "./PricingCard";

export const Pricings = () => {
  return (
    <section className={styles.container} id="pricings">
      <h2 className={styles.title}>Pricings</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <PricingCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};