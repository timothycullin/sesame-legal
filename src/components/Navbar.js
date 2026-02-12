// components/Navbar.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SvgLogoComponent from "./SvgLogoComponent";
import styles from './Navbar.module.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const isActive = (path) => router.pathname === path;

    // Top-level nav items, Resources has children
    const navLinks = [
        {
            label: "Resources",
            children: [
                { href: "/ivotips", label: "IVO Tips" },
                { href: "/blog", label: "Sesame Blog" },
            ]
        },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    // Close mobile menu on window resize > 768px
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768 && menuOpen) {
                setMenuOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        const handleRouteChange = () => setMenuOpen(false);
        router.events.on("routeChangeStart", handleRouteChange);
        return () => router.events.off("routeChangeStart", handleRouteChange);
    }, [router.events]);

    return (
        <>
            <header className={styles['top-nav']}>
                <div className={styles['nav-container']}>
                    <div className={styles['nav-left']}>
                        <Link
                            href="/"
                            aria-label="Sesame Logo"
                            className={styles['logo-link']}
                            onClick={() => setMenuOpen(false)}
                        >
                            <SvgLogoComponent className={styles.logo} />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className={`${styles['nav-right']} ${styles['desktop-menu']}`}>
                        {navLinks.map((link) => (
                            <div key={link.label} className={styles['nav-item']}>
                                {!link.children ? (
                                    <Link
                                        href={link.href}
                                        className={styles['nav-link']}
                                        aria-current={isActive(link.href) ? "page" : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <div className={styles['dropdown']}>
                                        <span className={styles['nav-link']}>
                                            {link.label}{" "}
                                            <svg
                                                className={styles['dropdown-chevron']}
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="miter"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>

                                        </span>

                                        <ul className={styles['dropdown-menu']}>
                                            {link.children.map((child) => (
                                                <li key={child.href}>
                                                    <Link
                                                        href={child.href}
                                                        className={styles['nav-link']}
                                                        aria-current={isActive(child.href) ? "page" : undefined}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Menu toggle button */}
                    <button
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                        className={`${styles['menu-toggle-btn']} ${menuOpen ? styles.open : ""}`}
                        type="button"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M6 18L18 6" />
                                <path d="M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className={styles.hamburger}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                aria-hidden="true"
                            >
                                <path d="M3 6h18" />
                                <path d="M3 12h18" />
                                <path d="M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile dropdown menu */}
            <nav className={`${styles['mobile-menu']} ${menuOpen ? styles.open : ""}`}>
                {navLinks.map(({ href, label, children }) =>
                    !children ? (
                        <Link
                            key={href}
                            href={href}
                            className={styles['nav-link']}
                            aria-current={isActive(href) ? "page" : undefined}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ) : (
                        children.map((child) => (
                            <Link
                                key={child.href}
                                href={child.href}
                                className={styles['nav-link']}
                                aria-current={isActive(child.href) ? "page" : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {child.label}
                            </Link>
                        ))
                    )
                )}
            </nav>
        </>
    );
}
