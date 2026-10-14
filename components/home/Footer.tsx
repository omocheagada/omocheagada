"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Container from "@/components/ui/Container";

const links = [
  {
    title: "Philosophy",
    href: "#philosophy",
  },
  {
    title: "Journey",
    href: "#journey",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Expertise",
    href: "#expertise",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

        <div className="grid-pattern opacity-[0.03]" />

      </div>

      <Container>

        <div className="grid gap-20 lg:grid-cols-[1.3fr_1fr]">

          {/* Left */}

          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .8,
              }}
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500 font-black text-white shadow-lg shadow-blue-500/30">

                  OA

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    Omoche Agada
                  </h3>

                  <p className="text-slate-400">
                    Product Manager • Software Engineer • Railway Operations
                  </p>

                </div>

              </div>

              <h2 className="mt-12 text-5xl font-bold leading-tight text-white">

                Building products.

                <br />

                Designing systems.

                <br />

                Leading with purpose.

              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-9 text-slate-400">

                I believe the best solutions emerge where technology,
                thoughtful product strategy and operational excellence
                come together to solve meaningful problems.

              </p>

            </motion.div>

                      </div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="space-y-12"
          >

            {/* Navigation */}

            <div>

              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                Explore
              </h4>

              <div className="space-y-4">

                {links.map((link) => (

                  <motion.div
                    key={link.href}
                    whileHover={{
                      x: 6,
                    }}
                  >

                    <Link
                      href={link.href}
                      className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-slate-300 transition-all duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    >

                      <span>{link.title}</span>

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </Link>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* Contact */}

            <div>

              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                Connect
              </h4>

              <div className="space-y-5">

                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-4 text-slate-300 transition hover:text-white"
                >
                  <Mail size={18} />

                  <span>omocheagada1@gmail.com</span>

                </a>

                <div className="flex items-center gap-4 text-slate-300">

                  <MapPin size={18} />

                  <span>Lagos, Nigeria</span>

                </div>

              </div>

              {/* Socials */}

              <div className="mt-8 flex gap-4">

                <motion.a
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  href="https://linkedin.com/in/omoche-agada-ab78b2130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-12 w-12 items-center justify-center rounded-xl hover:border-cyan-400/30"
                >
                  <FaLinkedin
                    size={20}
                    className="text-white"
                  />
                </motion.a>

                <motion.a
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  href="https://github.com/omocheagada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-12 w-12 items-center justify-center rounded-xl hover:border-cyan-400/30"
                >
                  <FaGithub
                    size={20}
                    className="text-white"
                  />
                </motion.a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <div>

            <p className="text-xl font-medium text-white">
              Built with intention.
            </p>

            <p className="mt-2 text-slate-500">
              Designed for people. Engineered for impact.
            </p>

          </div>

          <motion.a
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            href="#top"
            className="glass flex h-14 w-14 items-center justify-center rounded-full"
            aria-label="Back to top"
          >
            <ArrowUpRight
              size={22}
              className="-rotate-45 text-white"
            />
          </motion.a>

        </div>

        <div className="mt-10 text-center">

          <p className="text-sm tracking-wide text-slate-500">
            © {new Date().getFullYear()} Omoche Agada. All rights reserved.
          </p>

        </div>

      </Container>

    </footer>
  );
}