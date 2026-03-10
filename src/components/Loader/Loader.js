"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const LETTERS = ["M", "A", "X", "I", "K", "U", "T", "S"];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    let done = false;

    // Fake progress that crawls to 90% while waiting for real load
    const crawl = setInterval(() => {
      if (done) return;
      // Slow down as it approaches 90 — never reaches 100 on its own
      const increment = Math.max(1, (90 - currentProgress) * 0.08);
      currentProgress = Math.min(90, currentProgress + increment);
      setProgress(Math.floor(currentProgress));
    }, 100);

    // Real event — fires when ALL resources (images, fonts, iframes) are loaded
    const finish = () => {
      if (done) return;
      done = true;
      clearInterval(crawl);

      // Jump to 100%
      setProgress(100);

      // Exit after bar visually completes
      setTimeout(() => setLeaving(true), 350);
      setTimeout(() => setGone(true), 1200);
    };

    if (document.readyState === "complete") {
      // Already loaded (e.g. fast cache hit)
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    // Safety fallback — never hang forever
    const fallback = setTimeout(finish, 6000);

    return () => {
      clearInterval(crawl);
      window.removeEventListener("load", finish);
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
            <span key={i} className={styles.letter}>{letter}</span>
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