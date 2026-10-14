"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const philosophies = [
  {
    number: "01",
    title: "Technology",
    description:
      "Technology should reduce complexity, not create it. Every solution I build is designed to be intuitive, scalable, and dependable.",
  },
  {
    number: "02",
    title: "Product",
    description:
      "The best products begin with empathy. I believe every feature should solve a genuine problem and create measurable value for the people using it.",
  },
  {
    number: "03",
    title: "Operations",
    description:
      "Reliable systems don't happen by chance. Years in railway operations taught me that consistency, discipline, and continuous improvement create trust.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32"
    >
      <Container>

        {/* Section Header */}

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
            duration: 0.8,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
            Philosophy
          </span>

          <h2 className="display mt-8">
            Great products begin with
            <br />
            great thinking.
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">
            My work sits at the intersection of engineering,
            product strategy, and operational excellence.
            Regardless of the role, my approach remains the same:
            understand people, simplify complexity,
            and build systems that people trust.
          </p>

        </motion.div>

        {/* Philosophy Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {philosophies.map((item, index) => (

            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              whileHover={{
                y: -10,
              }}
              className="glass group relative overflow-hidden rounded-[32px] p-10"
            >

              {/* Decorative Number */}

              <span className="absolute -right-4 -top-8 text-[7rem] font-black text-white/5 select-none">
                {item.number}
              </span>

              <div className="relative">

                <span className="gradient text-sm font-semibold uppercase tracking-[0.4em]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="mt-6 h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-28" />

                <p className="mt-8 leading-8 text-slate-400">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

                {/* ==========================================
                EDITORIAL QUOTE
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.9,
          }}
          className="relative mt-32 overflow-hidden rounded-[40px]"
        >

          {/* Background Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl" />

          <div className="glass relative rounded-[40px] px-8 py-16 lg:px-20">

            <div className="mx-auto max-w-5xl text-center">

              <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
                Personal Philosophy
              </span>

              <blockquote className="mt-10 text-3xl font-semibold leading-relaxed text-white lg:text-5xl lg:leading-tight">
                "Great products earn attention.
                <br />
                Great systems earn trust.
                <br />
                The best technology disappears into the experience,
                and the best leadership disappears into the team's success."
              </blockquote>

              <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

              <p className="mt-8 text-lg font-medium text-slate-300">
                — Omoche Agada
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-500">
                Product Manager • Software Engineer • Railway Operations Professional
              </p>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}