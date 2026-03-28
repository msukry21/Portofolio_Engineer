import Image from "next/image";
import bg from "../../../../../public/background/projects-background.png";
import { projectsData } from "../../../data";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/ProjectDetail";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Image
        src={bg}
        alt="Project detail background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      <ProjectDetail project={project} />
    </>
  );
}