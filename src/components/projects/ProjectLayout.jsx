import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({
  slug,
  name,
  description,
  date,
  sector,
  disciplines,
  role,
}) => {
  return (
    <ProjectLink
      variants={item}
      href={`/projects/${slug}`}
      className="text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg space-y-2"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <h2 className="text-foreground font-medium">{name}</h2>
          {sector && (
            <span className="text-xs text-accent/70 border border-accent/30 rounded px-1.5 py-0.5 hidden sm:inline-block">
              {sector}
            </span>
          )}
        </div>
        <p className="text-muted text-xs sm:text-sm">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
      </div>

      <p className="text-muted text-xs sm:text-sm">{description}</p>

      {(disciplines || role) && (
        <div className="flex items-center gap-2 flex-wrap">
          {role && (
            <span className="text-xs text-foreground/60">{role}</span>
          )}
          {disciplines &&
            disciplines.map((d, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs text-accent/80 bg-accent/10 rounded px-1.5 py-0.5"
              >
                {d}
              </span>
            ))}
        </div>
      )}
    </ProjectLink>
  );
};

export default ProjectLayout;