"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const LETTERS = ["M", "A", "X", "I", "K", "U", "T", "S"];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loaderShown")) {
      setGone(true);
      return;
    }

    let currentProgress = 0;
    let done = false;

    const crawl = setInterval(() => {
      if (done) return;
      const increment = Math.max(1, (90 - currentProgress) * 0.08);
      currentProgress = Math.min(90, currentProgress + increment);
      setProgress(Math.floor(currentProgress));
    }, 100);

    const finish = () => {
      if (done) return;
      done = true;
      clearInterval(crawl);
      sessionStorage.setItem("loaderShown", "true"); 
      setProgress(100);
      setTimeout(() => setLeaving(true), 350);
      setTimeout(() => setGone(true), 1200);
    };

    const minDisplay = new Promise((resolve) => setTimeout(resolve, 1000));
    const windowLoad = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });

    Promise.all([minDisplay, windowLoad]).then(finish);

    const fallback = setTimeout(finish, 6000);

    return () => {
      clearInterval(crawl);
      clearTimeout(fallback);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`${styles.loader} ${leaving ? styles.leaving : ""}`}>
      <div className={styles.grain} />
      <div className={styles.inner}>
        <div className={styles.nameWrap}>
          {LETTERS.map((letter, i) => (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ))}
        </div>

        <div className={styles.barTrack}>
          <div className={styles.barFill} style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.bottom}>
          <p className={styles.tagline}>Barbería · Coronel</p>
          <p className={styles.percent}>{progress}%</p>
        </div>
      </div>
    </div>
  );
}
