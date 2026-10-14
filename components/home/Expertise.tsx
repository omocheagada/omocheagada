"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  Train,
  Users,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const expertise = [
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Building modern, scalable and high-performance digital products with a focus on maintainability and user experience.",

    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "UI Engineering",
      "Performance",
    ],
  },

  {
    icon: Briefcase,
    title: "Product Strategy",
    description:
      "Transforming ideas into products through user research, product thinking, prioritisation and execution.",

    skills: [
      "User Research",
      "Product Strategy",
      "Roadmaps",
      "PRDs",
      "Agile",
      "Discovery",
    ],
  },

  {
    icon: Train,
    title: "Operations",

    description:
      "Coordinating complex railway operations where safety, communication and real-time decision making are critical.",

    skills: [
      "Safety",
      "Dispatch",
      "Coordination",
      "Leadership",
      "Incident Response",
      "Communication",
    ],
  },

  {
    icon: Users,
    title: "Leadership",

    description:
      "Helping teams move with clarity, accountability and shared purpose while creating environments where people perform at their best.",

    skills: [
      "Mentoring",
      "Decision Making",
      "Ownership",
      "Collaboration",
      "Execution",
      "Growth",
    ],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

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

            Expertise

          </span>

          <h2 className="display mt-8">

            Four disciplines.

            <br />

            One integrated mindset.

          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">

            My work sits at the intersection of technology,
            product thinking and operational leadership.

            Rather than specialising in one discipline,
            I connect them to solve complex problems
            with clarity and purpose.

          </p>

        </motion.div>

        {/* Expertise Grid */}

        <div className="mt-28 grid gap-8 lg:grid-cols-2"></div>


        {/* ==========================================
                EXPERTISE SUMMARY
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
            duration: 0.8,
          }}
          className="mt-32"
        >
          <div className="glass relative overflow-hidden rounded-[40px] px-8 py-16 lg:px-20">

            {/* Background Glow */}

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-400/5 to-transparent" />

            <div className="relative z-10 text-center">

              <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
                Bringing It Together
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-6xl">

                Technology.

                <br />

                Strategy.

                <br />

                Leadership.

              </h2>

              <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">

                The most meaningful work happens where disciplines intersect.

                <br />
                <br />

                My background allows me to move comfortably between engineering,
                product strategy and operational leadership—connecting technical
                execution with business objectives while keeping people at the
                centre of every decision.

              </p>

              {/* Quote */}

              <motion.blockquote
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
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="mx-auto mt-14 max-w-3xl"
              >
                <p className="text-2xl font-light italic leading-relaxed text-white lg:text-3xl">
                  "Great products aren't built by technology alone.
                  They're built by people who understand systems,
                  users and execution."
                </p>
              </motion.blockquote>

              {/* Divider */}

              <div className="mx-auto mt-14 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

              {/* CTA */}

              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

                <Button
                  href="#contact"
                  icon={<ArrowRight size={18} />}
                >
                  Let's Build Together
                </Button>

                <Button
                  href="/resume.pdf"
                  variant="secondary"
                >
                  Download Resume
                </Button>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ==========================================
                NEXT SECTION
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.6,
          }}
          className="mt-24 text-center"
        >

          <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">
            Next
          </span>

          <h3 className="mt-5 text-4xl font-bold text-white">
            Let's Build Together
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you're building a product, scaling a team or improving an
            operational system, I'd love to explore how we can create something
            meaningful together.
          </p>

        </motion.div>

      </Container>

    </section>
  );
}