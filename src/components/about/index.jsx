import React from "react";
import ItemLayout from "./ItemLayout";

import {
  profileData,
  experienceStats,
  experienceData,
  skillCategories,
  softwareSkills,
  additionalTools,
} from "@/app/data";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* Bio */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full">
            {profileData.subtitle}
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {profileData.bio}
          </p>
        </ItemLayout>

        {/* Experience stats */}
        {experienceStats.map((stat, i) => (
          <ItemLayout
            key={i}
            className="col-span-6 lg:col-span-4 text-accent"
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              {stat.value}{" "}
              <sub className="font-semibold text-base">{stat.label}</sub>
            </p>
          </ItemLayout>
        ))}

        {/* Work Experience Timeline */}
        <ItemLayout className="col-span-full flex-col items-start">
          <h2 className="text-accent font-semibold text-base md:text-lg mb-4 uppercase tracking-wider">
            Experience
          </h2>
          <div className="w-full space-y-6">
            {experienceData.map((exp, i) => (
              <div key={i} className="flex gap-4 w-full">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0 mt-1" />
                  {i < experienceData.length - 1 && (
                    <div className="w-px flex-1 bg-accent/20 mt-1" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-foreground font-medium text-sm md:text-base">
                      {exp.role}
                    </h3>
                    <span className="text-muted text-xs">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-foreground/70 text-xs sm:text-sm">
                      {exp.company}
                    </span>
                    <span className="text-[10px] text-accent/70 border border-accent/30 rounded px-1.5 py-0.5">
                      {exp.type}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="font-light text-xs text-foreground/60 flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-muted flex-shrink-0 mt-1.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ItemLayout>

        {/* Skills by discipline */}
        {skillCategories.map((cat, i) => (
          <ItemLayout
            key={`skill-${i}`}
            className="col-span-full md:col-span-6 flex-col items-start"
          >
            <h3 className="text-accent font-semibold text-sm md:text-base mb-3 uppercase tracking-wider">
              {cat.title}
            </h3>
            <ul className="list-none space-y-1 w-full">
              {cat.skills.map((skill, j) => (
                <li
                  key={j}
                  className="font-light text-xs sm:text-sm text-foreground/80 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </ItemLayout>
        ))}

        {/* Software & Tools icons */}
        <ItemLayout className="col-span-full flex-col items-start">
          <h3 className="text-accent font-semibold text-sm md:text-base mb-4 uppercase tracking-wider">
            Software & Tools
          </h3>
          <img
            src={`https://skillicons.dev/icons?i=${softwareSkills}`}
            alt="Software and tools"
            loading="lazy"
          />
          {/* Additional tools (not on skillicons.dev) */}
          <div className="flex flex-wrap gap-2 mt-4">
            {additionalTools.map((tool, i) => (
              <span
                key={i}
                className="text-xs border border-accent/30 rounded-md px-2.5 py-1.5 text-foreground/80 flex items-center gap-1.5"
              >
                {tool.name}
                <span className="text-[10px] text-accent/60">
                  {tool.level}
                </span>
              </span>
            ))}
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
