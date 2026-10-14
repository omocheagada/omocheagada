"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const milestones = [
  {
    year: "Computer Science",
    title: "Building the Foundation",
    description:
      "My journey began with Computer Science, where I developed a strong understanding of software development, algorithms, systems thinking, and problem-solving.",
  },
  {
    year: "Software Engineering",
    title: "Learning to Build",
    description:
      "I expanded my technical skills by designing and building modern web applications, transforming ideas into digital products with a focus on performance, usability, and maintainability.",
  },
  {
    year: "Railway Operations",
    title: "Leading Mission-Critical Systems",
    description:
      "Working in railway operations taught me precision, safety, teamwork, and calm decision-making in environments where reliability and operational excellence are essential.",
  },
  {
    year: "Product Management",
    title: "Connecting Vision with Execution",
    description:
      "Product Management allowed me to combine technology, business, and customer understanding to deliver solutions that create measurable impact.",
  },
  {
    year: "Today",
    title: "Building Products People Trust",
    description:
      "Today I bring together engineering, product thinking, and operational leadership to create technology that solves meaningful problems and scales with confidence.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-36"
    >
      <Container>

        {/* ===========================
            SECTION HEADER
        ============================ */}

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
          className="mx-auto max-w-4xl text-center"
        >

          <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
            Journey
          </span>

          <h2 className="display mt-8">
            Every step
            <br />
            shaped how I build.
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">
            My career hasn't followed a traditional path.
            Each chapter strengthened a different perspective—
            technology, operations, leadership, and product strategy.
            Together they shape how I solve problems today.
          </p>

        </motion.div>

        {/* ===========================
            TIMELINE
        ============================ */}

        <div className="relative mx-auto mt-24 max-w-6xl">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent lg:block" />

          {milestones.slice(0, 3).map((item, index) => (

            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              className={`relative mb-20 flex items-start gap-10 ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              {/* Timeline Node */}

              <div className="relative z-20 hidden lg:flex">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950 shadow-lg shadow-blue-500/20">

                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

                </div>

              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: .25,
                }}
                className="glass flex-1 rounded-[32px] p-10"
              >

                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                  {item.year}
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="mt-6 h-px w-20 bg-gradient-to-r from-blue-500 to-cyan-400" />

                <p className="mt-8 leading-8 text-slate-400">
                  {item.description}
                </p>

              </motion.div>

            </motion.div>

          ))}

                    {milestones.slice(3).map((item, index) => (

            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              className={`relative mb-20 flex items-start gap-10 ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              {/* Timeline Node */}

              <div className="relative z-20 hidden lg:flex">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-950 shadow-lg shadow-cyan-500/20">

                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

                </div>

              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: .25,
                }}
                className={`glass flex-1 rounded-[32px] p-10 ${
                  item.year === "Today"
                    ? "border border-cyan-400/20"
                    : ""
                }`}
              >

                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                  {item.year}
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="mt-6 h-px w-20 bg-gradient-to-r from-blue-500 to-cyan-400" />

                <p className="mt-8 leading-8 text-slate-400">
                  {item.description}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

        {/* ==========================================
                CLOSING STATEMENT
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .9,
          }}
          className="relative mt-28 overflow-hidden rounded-[40px]"
        >

          {/* Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl" />

          <div className="glass relative rounded-[40px] px-8 py-16 lg:px-20">

            <div className="mx-auto max-w-5xl text-center">

              <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
                The Journey Continues
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-6xl">

                Every experience has added
                another layer to how I solve
                problems.

              </h2>

              <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">

                From writing code to managing products,
                from coordinating mission-critical railway operations
                to leading cross-functional initiatives,
                each chapter has strengthened my ability
                to build dependable technology,
                lead with clarity,
                and create solutions that people trust.

              </p>

              <div className="mx-auto mt-12 h-px w-28 bg-gradient-to-r from-blue-500 to-cyan-400" />

              <p className="mt-10 text-lg font-semibold text-white">

                The destination isn't just better software.

              </p>

              <p className="mt-3 text-2xl font-bold">

                <span className="gradient">

                  It's creating meaningful impact through technology.

                </span>

              </p>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>

  );
}