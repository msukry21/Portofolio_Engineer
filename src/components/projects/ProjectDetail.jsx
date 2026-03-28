"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectDetail = ({ project }) => {
  const { name, description, date, sector, disciplines, role, company, demoLink, details } =
    project;

  return (
    <motion.article
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-3xl mx-auto px-4 lg:px-0 space-y-8"
    >
      {/* Back button */}
      <motion.div variants={item}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header variants={item} className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-accent">{name}</h1>
        <p className="text-foreground/80 text-sm md:text-base">{description}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="text-muted">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </span>
          <span className="text-accent/70 border border-accent/30 rounded px-2 py-0.5">
            {sector}
          </span>
          <span className="text-foreground/60">{role}</span>
          {company && (
            <span className="text-foreground/40">@ {company}</span>
          )}
        </div>

        {/* Discipline tags */}
        <div className="flex flex-wrap gap-2">
          {disciplines.map((d, i) => (
            <span
              key={i}
              className="text-xs text-accent/80 bg-accent/10 rounded px-2 py-1"
            >
              {d}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Overview */}
      {details?.overview && (
        <motion.section variants={item} className="custom-bg rounded-lg p-6 space-y-3">
          <h2 className="text-accent font-semibold uppercase tracking-wider text-sm">
            Overview
          </h2>
          <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
            {details.overview}
          </p>
        </motion.section>
      )}

      {/* Scope of Work */}
      {details?.scope && (
        <motion.section variants={item} className="custom-bg rounded-lg p-6 space-y-3">
          <h2 className="text-accent font-semibold uppercase tracking-wider text-sm">
            Scope of Work
          </h2>
          <ul className="space-y-2">
            {details.scope.map((s, i) => (
              <li
                key={i}
                className="text-foreground/80 text-sm flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1.5" />
                {s}
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Deliverables */}
      {details?.deliverables && (
        <motion.section variants={item} className="custom-bg rounded-lg p-6 space-y-3">
          <h2 className="text-accent font-semibold uppercase tracking-wider text-sm">
            Key Deliverables
          </h2>
          <div className="flex flex-wrap gap-2">
            {details.deliverables.map((d, i) => (
              <span
                key={i}
                className="text-xs border border-accent/30 text-foreground/70 rounded-md px-3 py-1.5"
              >
                {d}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* Tools Used */}
      {details?.tools && (
        <motion.section variants={item} className="custom-bg rounded-lg p-6 space-y-3">
          <h2 className="text-accent font-semibold uppercase tracking-wider text-sm">
            Tools & Software
          </h2>
          <div className="flex flex-wrap gap-2">
            {details.tools.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-accent/10 text-accent/80 rounded-md px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* External link */}
      {demoLink && (
        <motion.div variants={item}>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg custom-bg text-accent hover:shadow-glass-sm transition-shadow text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Project
          </a>
        </motion.div>
      )}
    </motion.article>
  );
};

export default ProjectDetail;