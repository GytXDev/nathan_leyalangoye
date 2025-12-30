"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  GraduationCap,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
  ChevronDown,
  Database,
  Server,
  Monitor,
  Package,
  Download,
} from "lucide-react";
import Image from "next/image";
import {
  skills,
  projects,
  education,
  experiences,
  specializations,
  contactLinks,
} from "./data";

const iconMap: Record<string, any> = {
  Mail,
  Linkedin,
  Github,
  Globe,
  Database,
  Server,
  Monitor,
  Package,
};

const getCategoryIcon = (category: string) => {
  if (category.includes("Base de données") || category.includes("ORM"))
    return Database;
  if (category.includes("Backend")) return Server;
  if (category.includes("Frontend")) return Monitor;
  if (category.includes("ERP")) return Package;
  return Code;
};

const getSkillIcon = (skillName: string): string | null => {
  const iconMap: Record<string, string> = {
    JavaScript: "/skills/javascript.png",
    Python: "/skills/python.png",
    Dart: "/skills/dart.png",
    React: "/skills/react.png",
    "Vue.js": "/skills/vuejs.png",
    "Node.js": "/skills/nodejs.png",
    Odoo: "/skills/odoo.png",
  };
  return iconMap[skillName] || null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ProfileImage({ variants }: { variants: any }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div variants={variants} className="flex-1 flex justify-center">
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-lg bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 flex items-center justify-center">
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image
              src="/profile_again_2.png"
              alt="Nathan LEYALANGOYE"
              fill
              className="object-cover object-[center_30%]"
              priority
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full text-4xl md:text-6xl font-bold text-zinc-600 dark:text-zinc-400">
            NL
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-base"
            >
              Nathan LEYALANGOYE
            </motion.div>
            <div className="hidden md:flex gap-4">
              {[
                "about",
                "skills",
                "experience",
                "education",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors capitalize"
                >
                  {section === "about"
                    ? "À propos"
                    : section === "skills"
                    ? "Compétences"
                    : section === "experience"
                    ? "Parcours"
                    : section === "education"
                    ? "Formation"
                    : section === "projects"
                    ? "Projets"
                    : "Contact"}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 border-t border-zinc-200 dark:border-zinc-800 pt-3">
              <div className="flex flex-col gap-2">
                {[
                  "about",
                  "skills",
                  "experience",
                  "education",
                  "projects",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors capitalize text-left py-1"
                  >
                    {section === "about"
                      ? "À propos"
                      : section === "skills"
                      ? "Compétences"
                      : section === "experience"
                      ? "Parcours"
                      : section === "education"
                      ? "Formation"
                      : section === "projects"
                      ? "Projets"
                      : "Contact"}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex-1 text-center md:text-left"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-50 dark:to-zinc-400 bg-clip-text text-transparent leading-tight"
              >
                LEYALANGOYE
                <br />
                LEBOGHO Japhet
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400">
                  Nathan
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-3"
              >
                DÉVELOPPEUR LOGICIEL
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl"
              >
                Spécialisé dans le développement web & mobile, les systèmes
                métier complexes et l'intégration ERP Odoo.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-5 py-2.5 bg-zinc-900 text-white rounded-lg text-base font-medium hover:bg-zinc-800 transition-colors w-full sm:w-auto"
                >
                  Voir mes projets
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-5 py-2.5 border-2 border-zinc-900 rounded-lg text-base font-medium hover:bg-zinc-100 transition-colors w-full sm:w-auto"
                >
                  Me contacter
                </button>
                <a
                  href="/CV_Japhet_LEYALANGOYE.pdf"
                  download
                  className="px-5 py-2.5 bg-zinc-100 border border-zinc-300 rounded-lg text-base font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Télécharger mon CV
                </a>
              </motion.div>
            </motion.div>
            <ProfileImage variants={itemVariants} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce"
            >
              <ChevronDown className="w-6 h-6 text-zinc-400" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              À propos
            </motion.h2>
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                Développeur logiciel passionné, je me spécialise dans la
                création de solutions technologiques innovantes. Mon expertise
                couvre un large spectre, du développement web et mobile aux
                systèmes métier complexes.
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">Spécialisations</h3>
                <ul className="space-y-2">
                  {specializations.map((spec, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-2"
                    >
                      <Code className="w-4 h-4 mt-0.5 text-zinc-600 dark:text-zinc-400 flex-shrink-0" />
                      <span className="text-base text-zinc-700 dark:text-zinc-300">
                        {spec}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Technologies maîtrisées
            </motion.h2>

            {Array.from(new Set(skills.map((s) => s.category))).map(
              (category) => {
                const categorySkills = skills.filter(
                  (s) => s.category === category
                );
                const Icon = getCategoryIcon(category);

                return (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      <h3 className="text-lg font-semibold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => {
                        const iconPath = getSkillIcon(skill.name);
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-2 bg-zinc-100 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors flex items-center gap-2"
                          >
                            {iconPath ? (
                              <Image
                                src={iconPath}
                                alt={skill.name}
                                width={20}
                                height={20}
                                className="object-contain"
                              />
                            ) : null}
                            <span className="text-base text-zinc-700 dark:text-zinc-300 font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Parcours professionnel
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-6 border-l-2 border-zinc-300 dark:border-zinc-700"
                >
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-zinc-900 rounded-full"></div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-zinc-600 dark:text-zinc-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="text-base font-semibold mb-1">
                          {exp.title} – {exp.company}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                          {exp.period}
                        </p>
                        <ul className="space-y-1.5">
                          {exp.tasks.map((task, taskIndex) => (
                            <li
                              key={taskIndex}
                              className="text-base text-zinc-700 dark:text-zinc-300 flex items-start gap-2"
                            >
                              <span className="text-zinc-600 dark:text-zinc-400 mt-1.5">
                                •
                              </span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Formation
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-6 border-l-2 border-zinc-300 dark:border-zinc-700"
                >
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-zinc-900 rounded-full"></div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-zinc-600 dark:text-zinc-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="text-base font-semibold mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-1">
                          {edu.period}
                        </p>
                        {edu.specialization && (
                          <p className="text-base text-zinc-700 dark:text-zinc-300 italic">
                            {edu.specialization}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Projets réalisés
            </motion.h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg border border-zinc-200 p-4 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-2">
                      {project.location}
                    </p>
                  )}
                  {project.context && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 italic">
                      {project.context}
                    </p>
                  )}
                  <p className="text-base text-zinc-700 dark:text-zinc-300 mb-3">
                    {project.description}
                  </p>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                    Rôle : {project.role}
                  </p>
                  {project.contributions && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Contributions :
                      </p>
                      <ul className="list-disc list-inside space-y-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.contributions.map((contribution, idx) => (
                          <li key={idx}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 text-sm bg-zinc-100 rounded text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Contact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto"
            >
              N'hésitez pas à me contacter pour discuter de vos projets ou
              opportunités de collaboration.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {contactLinks.map((contact, index) => {
                const Icon = iconMap[contact.icon] || Mail;
                return (
                  <motion.a
                    key={index}
                    href={contact.url}
                    target={
                      contact.url.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-base text-zinc-700 dark:text-zinc-300 font-medium">
                      {contact.label}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} LEYALANGOYE LEBOGHO Japhet Nathan. Tous
            droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
