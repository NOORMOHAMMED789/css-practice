import React from "react";
import styles from "./responsivepage.module.css";

export default function ResponsivePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <nav className={styles.nav}>
        <h1>Navigation Bar</h1>
      </nav>
      <article className={styles.main}>
        <h1>Main content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          repellat magni autem est explicabo praesentium quas placeat
          reprehenderit similique, obcaecati itaque expedita aut consectetur.
          Deleniti molestiae at dignissimos quasi a tenetur praesentium sed
          eligendi!
        </p>
      </article>
      <aside className={`${styles.aside} ${styles.aside1}`}>
        <h1>Aside 1</h1>
      </aside>
      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
