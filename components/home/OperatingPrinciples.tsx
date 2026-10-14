"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    title: "Think Long-Term",
    description:
      "I build products and systems that remain valuable beyond today's requirements. Sustainable decisions create lasting impact.",
  },
  {
    number: "02",
    title: "Earn Trust First",
    description:
      "Trust is built through reliability, consistency and honest communication. Every decision should strengthen that trust.",
  },
  {
    number: "03",
    title: "Simplify Complexity",
    description:
      "Complex engineering should produce simple experiences. Users should enjoy clarity, not complexity.",
  },
  {
    number: "04",
    title: "Lead Through Service",
    description:
      "Leadership isn't about authority. It's about creating an environment where people can do their best work together.",
  },
  {
    number: "05",
    title: "Stay Curious",
    description:
      "Continuous learning fuels better ideas, better products and better leadership. Growth never truly ends.",
  },
];

export default function OperatingPrinciples() {
  return (
    <section
      id="principles"
      className="relative py-36 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[170px]" />

      <Container>

        {/* Header */}

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
            Operating Principles
          </span>

          <h2 className="display mt-8">
            The standards behind
            <br />
            every decision I make.
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">
            Technology changes.
            Markets evolve.
            User expectations grow.

            <br />
            <br />

            These principles remain constant and guide how I build products,
            lead teams and solve complex problems.
          </p>

        </motion.div>

        {/* Principles */}

        <div className="mx-auto mt-28 max-w-6xl">

          {principles.map((item, index) => (

            <motion.div
              key={item.number}
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
                delay: index * .12,
                duration: .7,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative border-b border-white/5 py-12 transition-all duration-500"
            >

              <div className="grid items-start gap-8 lg:grid-cols-[140px_1fr]">

                {/* Number */}

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  className="relative"
                >

                  <span className="text-7xl font-black text-white/5 transition-all duration-500 group-hover:text-blue-500/15">

                    {item.number}

                  </span>

                </motion.div>

                {/* Content */}

                <div>

                  <div className="flex items-center gap-5">

                    <h3 className="text-3xl font-bold text-white transition-all duration-300 group-hover:translate-x-2">

                      {item.title}

                    </h3>

                    <div className="h-px flex-1 bg-white/10" />

                  </div>

                  <div className="mt-6 h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-32" />

                  <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400">

                    {item.description}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

                  </div>

        {/* ==========================================
                TRANSITION PANEL
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
            duration: 0.9,
          }}
          className="relative mt-32 overflow-hidden rounded-[40px]"
        >

          {/* Ambient Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl" />

          {/* Glass Panel */}

          <div className="glass relative rounded-[40px] px-8 py-16 lg:px-20">

            <div className="mx-auto max-w-5xl text-center">

              <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
                Why It Matters
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-6xl">

                Principles guide decisions.

                <br />

                Decisions create impact.

              </h2>

              <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">

                Every product I've designed,
                every operational decision I've made,
                and every team I've contributed to
                has been shaped by these principles.

                <br />
                <br />

                The work you see next isn't simply a collection of projects—
                it's the result of a consistent way of thinking, solving
                problems, and delivering meaningful outcomes.

              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mx-auto mt-12 h-px bg-gradient-to-r from-blue-500 to-cyan-400"
              />

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                }}
                className="mt-10 text-xl font-semibold text-white"
              >
                Next →
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                }}
                className="mt-3 text-3xl font-bold"
              >
                <span className="gradient">
                  Selected Impact
                </span>
              </motion.p>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>

  );
}