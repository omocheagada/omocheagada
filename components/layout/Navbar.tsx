"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);

      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-50 px-4">
        <div className="container">

          <motion.nav
            initial={{
              y: -80,
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              y: showNavbar ? (scrolled ? -6 : 0) : -120,
              opacity: showNavbar ? 1 : 0,
              scale: scrolled ? 0.97 : 1,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="glass relative mx-auto flex h-20 items-center justify-between rounded-full px-6 shadow-2xl transition-all duration-300"
          >

            <div className="nav-glow" />

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-4"
            >

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -180,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }}
                whileHover={{
                  rotate: 12,
                  scale: 1.08,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 140,
                }}
                className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-500 shadow-lg shadow-blue-500/30"
              >

                <div className="absolute inset-0 bg-white/10" />

                <span className="relative z-10 text-lg font-black tracking-tight text-white">
                  OA
                </span>

              </motion.div>

              <div className="hidden sm:block">

                <h2 className="font-semibold tracking-wide text-white">
                  Omoche Agada
                </h2>

                <p className="text-xs tracking-wider text-slate-400">
                  Product • Engineering • Operations
                </p>

              </div>

            </Link>

            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl">

              {navItems.map((item) => (

                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative rounded-full px-4 py-2 text-sm font-medium"
                >

                  {activeSection === item.href && (

                    <motion.span
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 backdrop-blur-xl"
                    />

                  )}

                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      activeSection === item.href
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                </motion.a>

              ))}

            </div>
                        {/* Resume Button */}

            <a
              href="/resume.pdf"
              className="hidden lg:inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/50"
            >
              Download Resume
            </a>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? (
                <X size={22} className="text-white" />
              ) : (
                <Menu size={22} className="text-white" />
              )}
            </button>

          </motion.nav>

        </div>
      </header>

      {/* Mobile Navigation */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-4 right-4 top-28 z-40 lg:hidden"
          >

            <div className="glass rounded-3xl border border-white/10 p-6 shadow-2xl">

              {navItems.map((item) => (

                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{
                    x: 6,
                  }}
                  onClick={() => setMenuOpen(false)}
                  className={`mb-2 block rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                    activeSection === item.href
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.a>

              ))}

              <a
                href="/resume.pdf"
                className="mt-6 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-medium text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/50"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}