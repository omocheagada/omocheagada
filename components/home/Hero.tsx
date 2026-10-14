"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-40 pb-32"
    >
      {/* ==========================================
          GRID BACKGROUND
      =========================================== */}

      <div className="hero-grid absolute inset-0 -z-20" />

      {/* ==========================================
          GLOW EFFECTS
      =========================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute right-0 top-60 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute left-0 bottom-0 h-[320px] w-[320px] rounded-full bg-sky-500/10 blur-[120px]" />

      </div>

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* ==========================================
                LEFT SIDE
          =========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
          >

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .15,
              }}
              className="glass inline-flex items-center gap-3 rounded-full px-5 py-2"
            >

              <Sparkles
                size={15}
                className="text-cyan-400"
              />

              <span className="text-sm tracking-wide text-slate-300">

                Product Thinking • Engineering Excellence • Operational Leadership

              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .25,
              }}
              className="display mt-10 max-w-4xl"
            >

              BUILDING

              <br />

              <span className="gradient">
                PRODUCTS
              </span>

              <br />

              AND SYSTEMS

              <br />

              PEOPLE TRUST.

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .45,
              }}
              className="mt-10 max-w-xl text-lg leading-9 text-slate-400"
            >

              I combine software engineering,
              product strategy and railway operations
              to design dependable digital products
              and mission-critical systems that solve
              meaningful problems and improve lives.

            </motion.p>

            {/* Expertise Pills */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .55,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >

              {[
                "Software Engineer",
                "Product Manager",
                "Railway Operations",
              ].map((item) => (

                <div
                  key={item}
                  className="glass rounded-full px-5 py-2 text-sm font-medium text-slate-300"
                >
                  {item}
                </div>

              ))}

            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .7,
              }}
              className="mt-14 flex flex-wrap gap-5"
            >

              <Button
                href="#work"
                icon={<ArrowRight size={18} />}
              >
                View Projects
              </Button>

              <Button
                href="/resume.pdf"
                variant="secondary"
                icon={<Download size={18} />}
              >
                Download Resume
              </Button>

            </motion.div>

            {/* Small Intro */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .9,
              }}
              className="mt-16 flex items-center gap-5"
            >

              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent" />

              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">

                Based in Lagos, Nigeria

              </p>

            </motion.div>

          </motion.div>

          {/* ==========================================
                RIGHT SIDE
          =========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .9,
              delay: .2,
            }}
            className="relative flex justify-center"
          >
                        {/* ==========================================
                  ORBIT RING
            =========================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[540px] w-[540px] rounded-full border border-white/10"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 70,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[620px] w-[620px] rounded-full border border-blue-500/10"
            />

            {/* Ambient Glow */}

            <div className="absolute h-[620px] w-[620px] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent blur-[130px]" />

            {/* ==========================================
                    PORTRAIT
            =========================================== */}

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: .35,
              }}
              className="glass relative z-20 overflow-hidden rounded-[40px] p-4 shadow-[0_30px_80px_rgba(37,99,235,.25)]"
            >

              <div className="relative h-[620px] w-[460px] overflow-hidden rounded-[30px]">

                <Image
                  src="/images/profile.png"
                  alt="Omoche Agada"
                  fill
                  priority
                  className="object-cover object-center"
                />

              </div>

            </motion.div>

            {/* ==========================================
                  FLOATING CARD 1
            =========================================== */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="glass absolute left-0 top-10 z-30 rounded-3xl px-6 py-5"
            >

              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">

                PRODUCT

              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">

                Strategy

              </h3>

            </motion.div>

            {/* ==========================================
                  FLOATING CARD 2
            =========================================== */}

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="glass absolute -right-8 top-44 z-30 rounded-3xl px-6 py-5"
            >

              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">

                ENGINEERING

              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">

                Software

              </h3>

            </motion.div>

            {/* ==========================================
                  FLOATING CARD 3
            =========================================== */}

            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
              }}
              className="glass absolute bottom-10 left-8 z-30 rounded-3xl px-6 py-5"
            >

              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">

                LEADERSHIP

              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">

                Railway Operations

              </h3>

            </motion.div>

            {/* ==========================================
                  EXPERIENCE CARD
            =========================================== */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="glass absolute -bottom-8 right-6 z-30 rounded-3xl px-7 py-6"
            >

              <p className="text-sm text-slate-400">

                Professional Experience

              </p>

              <h2 className="mt-2 text-4xl font-bold text-white">

                3+

              </h2>

              <p className="text-sm text-slate-400">

                Years in Railway Operations

              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* ==========================================
                SCROLL INDICATOR
        =========================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="mt-24 flex flex-col items-center"
        >

          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-slate-500">

            Scroll

          </p>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
          >

            <ChevronDown
              size={22}
              className="text-slate-500"
            />

          </motion.div>

        </motion.div>

                {/* ==========================================
              TRUSTED BY EXPERIENCE
        ========================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="glass mt-32 rounded-[36px] p-10 lg:p-14"
        >
          <div className="mb-12 text-center">

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500">
              TRUSTED BY EXPERIENCE
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white lg:text-4xl">
              Experience across technology,
              <br />
              product and operations.
            </h2>

          </div>

          <div className="grid gap-10 text-center sm:grid-cols-2 xl:grid-cols-4">

            {/* Stat 1 */}

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="glass rounded-3xl p-8"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
                className="gradient text-5xl font-black"
              >
                3+
              </motion.h3>

              <p className="mt-4 text-slate-400">
                Years in Railway Operations
              </p>

            </motion.div>

            {/* Stat 2 */}

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="glass rounded-3xl p-8"
            >
              <motion.h3
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .1 }}
                className="gradient text-5xl font-black"
              >
                5+
              </motion.h3>

              <p className="mt-4 text-slate-400">
                Software & Product Projects
              </p>

            </motion.div>

            {/* Stat 3 */}

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="glass rounded-3xl p-8"
            >
              <motion.h3
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .2 }}
                className="gradient text-5xl font-black"
              >
                3
              </motion.h3>

              <p className="mt-4 text-slate-400">
                Professional Disciplines
              </p>

            </motion.div>

            {/* Stat 4 */}

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="glass rounded-3xl p-8"
            >
              <motion.h3
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .3 }}
                className="gradient text-5xl font-black"
              >
                ∞
              </motion.h3>

              <p className="mt-4 text-slate-400">
                Commitment to Learning
              </p>

            </motion.div>

          </div>
        </motion.div>

      </Container>

    </section>
  );
}