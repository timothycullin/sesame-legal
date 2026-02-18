// React + Next
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Components
import SvgLogoComponent from "./SvgLogoComponent";

// Styles
import styles from "./Navbar.module.css";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    const router = useRouter();

    const navLinks = [
        {
            label: "Resources",
            children: [
                { href: "/ivotips", label: "IVO Tips" },
                { href: "/blog", label: "Sesame Blog" },
            ],
        },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (path) => router.pathname === path;
    const isDropdownActive = (dropdown) => dropdown.children?.some((child) => isActive(child.href));

    const closeDropdownIfInactive = (dropdownLabel) => {
        if (!dropdownLabel) return null;
        const dropdown = navLinks.find((link) => link.label === dropdownLabel && link.children);
        return dropdown && isDropdownActive(dropdown) ? dropdownLabel : null;
    };

    const toggleMenu = () => setMenuOpen((prev) => {
        const newState = !prev;

        // Reset mobile dropdown every time menu opens or closes
        setMobileDropdownOpen(null);

        return newState;
    });

    const toggleMobileDropdown = (label) =>
        setMobileDropdownOpen((prev) => (prev === label ? null : label));

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
                setMobileDropdownOpen(closeDropdownIfInactive);
            }
        };

        const handleRouteChange = () => {
            setMenuOpen(false);
            setMobileDropdownOpen(closeDropdownIfInactive);
        };

        window.addEventListener("resize", handleResize);
        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            window.removeEventListener("resize", handleResize);
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router.events, router.pathname]);


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
                                    <div className={styles.dropdown}>
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
                                className={`${styles['nav-link']} ${styles['dropdown-link']} ${mobileDropdownOpen === link.label ? styles['open-dropdown'] : ""}`}
                                onClick={() => toggleMobileDropdown(link.label)}
                                aria-expanded={mobileDropdownOpen === link.label}
                            >
                                {link.label}
                                <svg
                                    className={styles['mobile-dropdown-chevron']}
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

            {/* Overlay */}
            <div
                className={`${styles['mobile-overlay']} ${menuOpen ? styles['open'] : ""}`}
                onClick={toggleMenu} // centralizes closing + dropdown reset
            />

        </>
    );
}
