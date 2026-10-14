"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";

import { FaLinkedin, FaGithub } from "react-icons/fa6"

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[220px]" />

        <div className="grid-pattern opacity-[0.03]" />

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

            Let's Build Together

          </span>

          <h2 className="display mt-8">

            Great products.

            <br />

            Reliable systems.

            <br />

            Meaningful experiences.

          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">

            Whether you're building a product,
            improving operations,
            or looking for someone who can bridge technology,
            strategy and execution—

            I'd love to hear your story.

          </p>

        </motion.div>

        {/* Conversation Card */}

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
            duration: .8,
          }}
          className="mx-auto mt-24 max-w-6xl"
        >

          <div className="glass relative overflow-hidden rounded-[40px] p-10 lg:p-20">

            {/* Ambient Glow */}

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent" />

            <div className="relative z-10 grid gap-16 lg:grid-cols-2">

              {/* Left */}

              <div>

                <span className="gradient text-sm font-semibold uppercase tracking-[0.35em]">

                  Start a Conversation

                </span>

                <h3 className="mt-8 text-5xl font-bold leading-tight text-white">

                  Every meaningful
                  collaboration starts
                  with a simple hello.

                </h3>

                <p className="mt-8 text-lg leading-9 text-slate-400">

                  If my experience aligns with
                  what you're building,
                  I'd be happy to explore
                  how I can contribute.

                </p>

                                {/* Contact Details */}

                <div className="mt-12 space-y-5">

                  <motion.a
                    whileHover={{
                      x: 8,
                    }}
                    href="mailto:omocheagada1@gmail.com"
                    className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">
                      <Mail className="text-white" size={24} />
                    </div>

                    <div>

                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                        Email
                      </p>

                      <p className="mt-1 text-lg font-medium text-white">
                        omocheagada1@gmail.com
                      </p>

                    </div>

                  </motion.a>

                  <motion.div
                    whileHover={{
                      x: 8,
                    }}
                    className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">
                      <MapPin className="text-white" size={24} />
                    </div>

                    <div>

                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                        Location
                      </p>

                      <p className="mt-1 text-lg font-medium text-white">
                        Lagos, Nigeria
                      </p>

                    </div>

                  </motion.div>

                </div>

              </div>

              {/* Right Side */}

              <div className="flex flex-col justify-center">

                <span className="gradient text-sm font-semibold uppercase tracking-[0.35em]">

                  Connect

                </span>

                <h4 className="mt-8 text-4xl font-bold text-white">

                  Let's create something
                  people will remember.

                </h4>

                <p className="mt-8 text-lg leading-9 text-slate-400">

                  I'm always interested in conversations about
                  product management,
                  software engineering,
                  digital products,
                  railway operations,
                  innovation,
                  and opportunities where thoughtful execution makes the difference.

                </p>

                {/* Social Links */}

                <div className="mt-12 flex flex-wrap gap-5">

                  <motion.a
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    href="https://linkedin.com/in/omoche-agada-ab78b2130"
                    target="_blank"
                    className="glass flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 hover:border-cyan-400/40"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </motion.a>

                  <motion.a
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    href="https://github.com/omocheagada"
                    target="_blank"
                    className="glass flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 hover:border-cyan-400/40"
                  >
                    <FaGithub className="text-white text-xl" />
                  </motion.a>

                </div>

                {/* CTA */}

                <div className="mt-14">

                  <Button
                    href="mailto:omocheagada1@gmail.com"
                    icon={<ArrowRight size={18} />}
                    className="px-10"
                  >
                    Start a Conversation
                  </Button>

                </div>

                              </div>

            </div>

          </div>

        </motion.div>

        {/* ==========================================
                PERSONAL PHILOSOPHY
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
            duration: 0.9,
          }}
          className="mx-auto mt-32 max-w-5xl text-center"
        >

          <div className="glass rounded-[40px] px-10 py-20">

            <span className="gradient text-sm font-semibold uppercase tracking-[0.45em]">

              A Personal Philosophy

            </span>

            <blockquote className="mx-auto mt-10 max-w-4xl">

              <p className="text-3xl font-light leading-relaxed text-white lg:text-5xl">

                "Technology is at its best when it serves people.

                <br />
                <br />

                Great products earn trust.

                Reliable systems create confidence.

                Leadership brings both together."

              </p>

            </blockquote>

            <div className="mx-auto mt-12 h-px w-20 bg-gradient-to-r from-blue-500 to-cyan-400" />

            <p className="mt-10 text-lg font-semibold text-white">

              — Omoche Agada

            </p>

          </div>

        </motion.div>

        {/* ==========================================
                FINAL CTA
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
            duration: 0.8,
          }}
          className="mt-24 text-center"
        >

          <p className="text-xl text-slate-400">

            Thanks for visiting.

          </p>

          <h3 className="mt-4 text-5xl font-bold text-white">

            Let's build something meaningful.

          </h3>

          <div className="mt-10">

            <Button
              href="mailto:omocheagada1@gmail.com"
              icon={<ArrowRight size={18} />}
            >
              Get In Touch
            </Button>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}