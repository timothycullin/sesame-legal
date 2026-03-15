// React + Next
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Components
import SvgLogoComponent from "./SvgLogoComponent";

// Styles
import styles from "./Navbar.module.css";

// Logic
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);

    const router = useRouter();

    const navLinks = [
        {
            label: "Resources",
            children: [
                { href: "/ivotips", label: "IVO Tips" },
            ],
        },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (path) => router.pathname === path;

    const toggleMenu = () =>
        setMenuOpen((prev) => {
            setMobileDropdownOpen(null);
            return !prev;
        });

    const toggleMobileDropdown = (label) =>
        setMobileDropdownOpen((prev) => (prev === label ? null : label));

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
                setMobileDropdownOpen(null);
            }
        };

        const handleRouteChange = () => {
            setMenuOpen(false);
            setMobileDropdownOpen(null);
            setDesktopDropdownOpen(null);
        };

        window.addEventListener("resize", handleResize);
        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            window.removeEventListener("resize", handleResize);
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router.events]);

    // Markup
    return (
        <>
            <header className={styles['top-nav']}>
                <div className={styles['nav-container']}>

                    <div className={styles['nav-left']}>
                        {/* Logo link: aria-label provides an accessible name because the SVG logo has no visible text */}
                        <Link
                            href="/"
                            aria-label="Home"
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

                                    <div
                                        className={`${styles.dropdown} ${desktopDropdownOpen === link.label ? styles.open : ""
                                            }`}
                                        onMouseEnter={() => setDesktopDropdownOpen(link.label)}
                                        onMouseLeave={() => setDesktopDropdownOpen(null)}
                                        /* Allows keyboard users to tab into the dropdown and keeps it open while focus remains inside */
                                        onFocus={() => setDesktopDropdownOpen(link.label)}
                                        onBlur={(e) => {
                                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                                setDesktopDropdownOpen(null);
                                            }
                                        }}
                                    >

                                        <button
                                            type="button"
                                            className={styles['nav-link']}
                                            aria-haspopup="true"
                                            aria-expanded={desktopDropdownOpen === link.label}
                                        >
                                            {link.label}
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
                                                aria-hidden="true"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>

                                        <ul
                                            className={`${styles['dropdown-menu']} ${desktopDropdownOpen === link.label ? styles.open : ""
                                                }`}
                                        >
                                            {link.children.map((child) => (
                                                <li key={child.href}>
                                                    <Link
                                                        href={child.href}
                                                        className={styles['nav-link']}
                                                        aria-current={
                                                            isActive(child.href) ? "page" : undefined
                                                        }
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

                {navLinks.map((link) =>
                    !link.children ? (

                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles['nav-link']}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            onClick={() => {
                                setMenuOpen(false);
                                setMobileDropdownOpen(null);
                            }}
                        >
                            {link.label}
                        </Link>

                    ) : (

                        <div key={link.label} className={styles['mobile-dropdown']}>

                            <button
                                type="button"
                                className={`${styles['nav-link']} ${styles['dropdown-link']} ${mobileDropdownOpen === link.label ? styles['open-dropdown'] : ""
                                    }`}
                                onClick={() => toggleMobileDropdown(link.label)}
                                aria-expanded={mobileDropdownOpen === link.label}
                                aria-haspopup="true"
                            >
                                {link.label}
                            </button>

                            {mobileDropdownOpen === link.label && (
                                <div className={styles['mobile-submenu']}>
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={styles['nav-link']}
                                            aria-current={isActive(child.href) ? "page" : undefined}
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setMobileDropdownOpen(null);
                                            }}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}

                        </div>

                    )
                )}

            </nav>

            <div
                className={`${styles['mobile-overlay']} ${menuOpen ? styles['open'] : ""}`}
                onClick={toggleMenu}
                aria-hidden="true"
            />
        </>
    );
}