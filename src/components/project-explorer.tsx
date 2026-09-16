"use client";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { useMemo, useState } from "react";
import type { Project } from "@/data/portfolio";

const filters = ["All", "Systems", "AI", "Finance"];

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(() => projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Systems") return ["crm-follow-up-system", "smartskale-candidate-sourcing"].includes(project.slug);
    return project.category.toLowerCase().includes(filter.toLowerCase());
  }), [filter, projects]);

  return <>
    <div className="filter-bar" role="tablist" aria-label="Filter projects">
      {filters.map(item => <button role="tab" aria-selected={filter === item} className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}
    </div>
    <div className="project-list">
      {visible.map(project => <article className={`project-card project-${projects.indexOf(project) + 1}`} key={project.slug}>
        <div className="project-visual" aria-hidden="true">
          <div className="visual-top"><span>{String(projects.indexOf(project) + 1).padStart(2, "0")}</span><span>{project.year}</span></div>
          <div className="visual-icon">{project.symbol}</div>
          <div className="visual-lines"><i /><i /><i /></div>
        </div>
        <div className="project-content">
          <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
          <div className="project-actions">
            <Link className="project-link" href={`/work/${project.slug}`}>Explore the build <ArrowUpRight size={17} /></Link>
            <a className="project-link" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            {project.live && <a className="project-link" href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>}
          </div>
        </div>
      </article>)}
    </div>
  </>;
}
