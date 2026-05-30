import Link from "next/link";
import { useState } from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Courses", href: "/courses" },
    { label: "Historique", href: "/history" },
    { label: "Top Produits", href: "/top-products" },
  ];

  return (
    <header className={styles.header}>
      {/* Logo / titre */}
      <div className={styles.logo}>🛒 Ma Course</div>

      {/* Burger button (mobile uniquement) */}
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Nav links */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}