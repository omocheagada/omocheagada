"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const works = [
  {
    number: "01",
    title: "SaveTrust",
    headline:
      "Helping people build healthier financial habits through intentional product design.",
    role: "Founder • Product Manager • Designer • Developer",
    capabilities: [
      "Product Strategy",
      "User Research",
      "PRD",
      "Roadmapping",
      "UX Thinking",
      "MVP Planning",
    ],
    outcome:
      "Designed a complete fintech product vision focused on helping users save intentionally through thoughtful user experiences and clear product strategy.",
    image: "/images/savetrust.jpg",
  },

  {
    number: "02",
    title: "Railway Operations",
    headline:
      "Supporting safe, reliable railway operations through real-time operational leadership.",
    role: "Traffic Dispatcher",
    capabilities: [
      "Leadership",
      "Safety",
      "Operations",
      "Decision Making",
      "Communication",
      "Incident Management",
    ],
    outcome:
      "Coordinated mission-critical railway operations, contributing to safe passenger movement and dependable daily service through disciplined operational decision-making.",
    image: "/images/railway.jpg",
  },

  {
    number: "03",
    title: "Personal Brand",
    headline:
      "Designing a digital experience that communicates trust, clarity and leadership.",
    role: "Designer • Engineer",
    capabilities: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Brand Strategy",
      "Design System",
      "UI Engineering",
    ],
    outcome:
      "Built a premium editorial website that reflects a unique combination of engineering, product thinking and operational leadership.",
    image: "/images/website.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative py-36"
    >
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

            Selected Work

          </span>

          <h2 className="display mt-8">

            A selection of work
            <br />

            that reflects how I think,
            build and lead.

          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">

            Every project begins with a problem worth solving.
            My focus is never simply delivering software—
            it's creating products, systems and experiences
            that earn trust and generate meaningful outcomes.

          </p>

        </motion.div>

        {/* Case Studies */}

        <div className="mt-28 space-y-32"></div>

                  {/* ==========================================
                  SAVE TRUST
          ========================================== */}

          <motion.article
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
              duration: .8,
            }}
            className="group"
          >

            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* Content */}

              <div>

                <span className="text-7xl font-black text-white/5">

                  {works[0].number}

                </span>

                <h3 className="mt-4 text-5xl font-bold text-white">

                  {works[0].title}

                </h3>

                <p className="mt-8 text-2xl leading-relaxed text-slate-300">

                  {works[0].headline}

                </p>

                <div className="mt-10">

                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">

                    My Role

                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">

                    {works[0].role}

                  </p>

                </div>

                <div className="mt-12">

                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">

                    Capabilities

                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    {works[0].capabilities.map((item) => (

                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 backdrop-blur-xl"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="mt-12">

                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">

                    Outcome

                  </p>

                  <p className="mt-6 max-w-xl text-lg leading-9 text-slate-400">

                    {works[0].outcome}

                  </p>

                </div>

                <div className="mt-12">

                  <Button
                    href="/work/savetrust"
                    icon={<ArrowRight size={18} />}
                  >
                    View Story
                  </Button>

                </div>

              </div>

              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: .35,
                }}
                className="relative overflow-hidden rounded-[40px]"
              >

                {/* Glow */}

                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-blue-500/20 via-transparent to-cyan-400/10 blur-3xl" />

                <div className="glass relative overflow-hidden rounded-[40px] p-5">

                  <motion.img
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: .5,
                    }}
                    src={works[0].image}
                    alt={works[0].title}
                    className="aspect-[4/3] w-full rounded-[28px] object-cover"
                  />

                  <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 backdrop-blur-xl">

                    <ArrowUpRight className="text-white" />

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.article>

                    {/* ==========================================
                  RAILWAY OPERATIONS
          ========================================== */}

          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* Image */}

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-[40px] lg:order-1"
              >
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-cyan-500/15 via-transparent to-blue-500/15 blur-3xl" />

                <div className="glass relative overflow-hidden rounded-[40px] p-5">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={works[1].image}
                    alt={works[1].title}
                    className="aspect-[4/3] w-full rounded-[28px] object-cover"
                  />

                  <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 backdrop-blur-xl">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Content */}

              <div className="lg:order-2">

                <span className="text-7xl font-black text-white/5">
                  {works[1].number}
                </span>

                <h3 className="mt-4 text-5xl font-bold text-white">
                  {works[1].title}
                </h3>

                <p className="mt-8 text-2xl leading-relaxed text-slate-300">
                  {works[1].headline}
                </p>

                <div className="mt-10">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                    My Role
                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">
                    {works[1].role}
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-3">
                  {works[1].capabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 backdrop-blur-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl border border-cyan-500/15 bg-cyan-500/5 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                    Impact
                  </p>

                  <ul className="mt-5 space-y-3 text-slate-300">
                    <li>✓ Mission-critical operations</li>
                    <li>✓ Passenger safety & reliability</li>
                    <li>✓ Real-time operational leadership</li>
                  </ul>
                </div>

              </div>

            </div>
          </motion.article>

          {/* ==========================================
                  PERSONAL BRAND
          ========================================== */}

          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* Content */}

              <div>

                <span className="text-7xl font-black text-white/5">
                  {works[2].number}
                </span>

                <h3 className="mt-4 text-5xl font-bold text-white">
                  {works[2].title}
                </h3>

                <p className="mt-8 text-2xl leading-relaxed text-slate-300">
                  {works[2].headline}
                </p>

                <div className="mt-10">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                    My Role
                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">
                    {works[2].role}
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-3">
                  {works[2].capabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 backdrop-blur-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl border border-blue-500/15 bg-blue-500/5 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                    Impact
                  </p>

                  <ul className="mt-5 space-y-3 text-slate-300">
                    <li>✓ Premium personal brand</li>
                    <li>✓ Editorial web experience</li>
                    <li>✓ Performance-first design</li>
                  </ul>
                </div>

              </div>

              {/* Image */}

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-[40px]"
              >
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-blue-500/20 via-transparent to-cyan-400/10 blur-3xl" />

                <div className="glass relative overflow-hidden rounded-[40px] p-5">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={works[2].image}
                    alt={works[2].title}
                    className="aspect-[4/3] w-full rounded-[28px] object-cover"
                  />

                  <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 backdrop-blur-xl">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.article>

        {/* ==========================================
                TRANSITION TO EXPERTISE
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-36"
        >
          <div className="glass rounded-[40px] px-10 py-20 text-center">

            <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
              Beyond The Work
            </span>

            <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
              Great outcomes come from
              <br />
              strong capabilities.
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">
              Every product delivered, every system improved and every
              operational decision is backed by a combination of engineering,
              product thinking, leadership and execution.
            </p>

            <div className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

            <p className="mt-10 text-xl font-semibold text-white">
              Next →
            </p>

            <p className="gradient mt-3 text-3xl font-bold">
              Expertise
            </p>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}