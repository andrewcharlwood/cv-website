'use client';

import {motion} from 'framer-motion';
import {ExternalLink, Github} from 'lucide-react';
import Image, {StaticImageData} from 'next/image';
import React, {FC, memo} from 'react';

import {useScrollAnimation} from '@/hooks/useScrollAnimation';
import blueteqImg from '@/images/portfolio/blueteq.jpg';
import nmsImg from '@/images/portfolio/nms.jpg';
import pharmetricsImg from '@/images/portfolio/pharmetrics.jpg';
import ppaImg from '@/images/portfolio/ppa2.jpg';

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  url: string;
  isGithub?: boolean;
}

const projects: Project[] = [
  {
    title: 'PharMetrics',
    description: 'Interactive platform for exploring health economics and drug development. Discover how healthcare systems evaluate drug value, research study design impact, and play Trials Tycoon strategy game.',
    image: pharmetricsImg,
    tags: ['React', 'Health Economics', 'Interactive'],
    url: 'https://medicines.charlwood.xyz/',
  },
  {
    title: 'Patient Pathway Analysis',
    description: 'Interactive Icicle chart displaying patient care pathways for high-cost drugs. Enables intuitive exploration of patient journeys by trust/directorate with detailed cost breakdowns. Produced with fake data for demonstration purposes.',
    image: ppaImg,
    tags: ['Python', 'Data Visualization', 'Icicle'],
    url: './patient_pathway_analysis.html',
  },
  {
    title: 'Blueteq Form Generator',
    description: 'Automated program scraping NICE technology appraisals to generate standardised Blueteq prior approval forms. Enabled 70% reduction in forms and consistent formatting across the system.',
    image: blueteqImg,
    tags: ['Python', 'Automation', 'NICE'],
    url: 'https://github.com/andrewcharlwood/blueteqforms',
    isGithub: true,
  },
  {
    title: 'NMS Training Video',
    description: 'Educational video explaining the New Medication Service to train non-pharmacist staff. Produced to expand NMS provision across Tesco pharmacy stores.',
    image: nmsImg,
    tags: ['Video Production', 'Training', 'NMS'],
    url: 'https://www.youtube.com/watch?v=Rm1wcX92XlQ',
  },
];

const ProjectCard: FC<{project: Project; index: number; isVisible: boolean}> = memo(({project, index, isVisible}) => (
  <div
    className={`group relative bg-dash-card rounded-2xl overflow-hidden border border-dash-border
               hover:border-nhs-blue/50 transition-all duration-500
               ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    style={{transitionDelay: `${index * 100}ms`}}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dash-card via-transparent to-transparent" />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-nhs-dark-blue/80 opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 flex items-center justify-center">
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dash-dark font-semibold
                     rounded-lg hover:bg-nhs-light-blue transition-colors"
          aria-label={project.isGithub ? `View code for ${project.title}` : `View ${project.title} project`}
        >
          {project.isGithub ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
          {project.isGithub ? 'View Code' : 'View Project'}
        </motion.a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-nhs-light-blue transition-colors">
        {project.title}
      </h3>
      <p className="text-dash-muted text-sm mb-4 line-clamp-3">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-dash-dark text-dash-muted text-xs rounded-md border border-dash-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
));
ProjectCard.displayName = 'ProjectCard';

const Projects: FC = memo(() => {
  const {ref: headerRef, isVisible: headerVisible} = useScrollAnimation('projects-header');
  const {ref: gridRef, isVisible: gridVisible} = useScrollAnimation('projects-grid');

  return (
    <section className="relative py-24 bg-dash-bg overflow-hidden" id="projects">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 -right-48 w-96 h-96 bg-nhs-blue/10 rounded-full blur-3xl"
        animate={{scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3]}}
        transition={{duration: 10, repeat: Infinity}}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-500
                     ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-nhs-blue/10 border border-nhs-blue/20 rounded-full
                         text-nhs-light-blue text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-display-sm font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-dash-muted max-w-2xl mx-auto">
            A selection of tools and solutions I've built to improve healthcare delivery
          </p>
        </div>

        {/* Projects grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
