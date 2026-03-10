import style from "./Main.module.css";
import Link from "next/link";

export default function Main() {
  return (
    <main className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.mainTextWrapperOne}>
          <p className={style.mainTexts}>
            ten <br></br>confianza.
          </p>
        </div>
        <div className={style.mainTextWrapperTwo}>
          <p className={style.mainTexts}>
            sé sobre <br></br>cabello.
          </p>
        </div>
        <div className={style.mainButtonWrapper}>
          <Link
            className={`${style.mainButton} ${style.ctaButton}`}
            href="/booking"
          >
            agendar
          </Link>
          <Link
            className={style.mainButton}
            href="/lookbook"
          >
            lookbook
          </Link>
        </div>
      </div>
    </main>
  );
}
