"use client";

import styles from './Footer.module.css';
import SecondaryFooter from '../SecondaryFooter/SecondaryFooter';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SecondaryFooter />
    </footer>
  );
}