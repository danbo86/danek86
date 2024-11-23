"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (section) => {
    setMenuOpen(false); // Zamknij menu po kliknięciu
    handleSectionChange(section);
  };

  // Funkcja do obsługi zmiany aktywnej sekcji i koloru active
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleClickreset = () => {
    setMenuOpen(false);
    setActiveSection("home"); // Przywracamy domyślną sekcję, np. "home"
  };

  useEffect(() => {
    // Ustawienie overflow na body w zależności od stanu menuOpen
    if (menuOpen) {
      // Ukrywa pasek przewijania na stronie
      document.body.style.overflow = "hidden";
    } else {
      // Przywraca pasek przewijania, gdy menu jest zamknięte
      document.body.style.overflow = "auto";
    }

    // Funkcja do obsługi przewijania
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Nasłuchujemy zdarzenia scroll
    window.addEventListener("scroll", handleScroll);

    // Sprzątanie po komponencie, usunięcie nasłuchiwacza
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]); // useEffect będzie uruchamiany tylko, gdy menuOpen się zmienia

  return (
    <header className={`header ${scrolling ? "scroling" : ""}`} id="top">
      <Link
        href="/"
        className={`logo ${activeSection === "home" ? "" : ""}`}
        onClick={handleClickreset}
      >
        Danbo86
      </Link>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`navbar ${menuOpen ? "active-mb-menu no-scroll" : ""}`}>
        <Link
          href="/omnie"
          className={activeSection === "omnie" ? "active" : ""}
          onClick={() => handleClick("omnie")}
        >
          O mnie
        </Link>
        <Link
          href="/blog"
          className={activeSection === "blog" ? "active" : ""}
          onClick={() => handleClick("blog")}
        >
          Blog
        </Link>
        <Link
          href="/wyniki"
          className={activeSection === "wyniki" ? "active" : ""}
          onClick={() => handleClick("wyniki")}
        >
          Wyniki
        </Link>
        <Link
          href="/kontakt"
          className={activeSection === "kontakt" ? "active" : ""}
          onClick={() => handleClick("kontakt")}
        >
          Kontakt
        </Link>
        <Link
          href="/konkurs_Zello"
          className={activeSection === "konkurs_Zello" ? "active" : ""}
          onClick={() => handleClick("konkurs_Zello")}
        >
          Konkurs-fx
        </Link>
        <Link
          href="/galeria"
          className={activeSection === "galeria" ? "active" : ""}
          onClick={() => handleClick("galeria")}
        >
          Galeria
        </Link>
      </nav>
    </header>
  );
}
