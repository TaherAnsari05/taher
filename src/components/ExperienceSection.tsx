import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "EzyGen",
    location: "Pune, India",
    period: "May 2025 – Present",
    bullets: [
      "Architected core modules for Ezy Rewards and Ezy RPM platforms serving thousands of users with React.js, TypeScript, and Vite",
      "Engineered reusable component library with TypeScript and Tailwind CSS, reducing development time by 40%",
      "Integrated 15+ REST APIs for reward points management, flight booking, and real-time transaction processing",
      "Implemented Redux for centralized state management across 50+ components",
      "Designed dark/light theme system with full WCAG 2.1 accessibility compliance",
      "Reduced console errors by 90% through systematic debugging and TypeScript strict mode",
    ],
  },
  {
    title: "Python Developer",
    company: "Zaalima Development",
    location: "Bengaluru, India",
    period: "Mar 2025 – May 2025",
    bullets: [
      "Built desktop automation system using Python and PyAutoGUI, reducing manual effort by 70%",
      "Developed FastAPI backend with robust API endpoints for automation and web scraping",
      "Created React + TypeScript dashboard for automation management with real-time status updates",
      "Implemented type-safe API communication layer using Axios",
    ],
  },
  {
    title: "React Developer",
    company: "The Entrepreneurship Network",
    location: "Pune, India",
    period: "Jan 2025 – Mar 2025",
    bullets: [
      "Developed responsive web interface for 'Ten Summit' achieving 95+ Lighthouse performance score",
      "Built reusable component architecture with React Hooks for efficient state management",
      "Optimized bundle size through code splitting and lazy loading, improving load times by 35%",
      "Ensured cross-browser compatibility across iOS, Android, and desktop browsers",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                    <Briefcase className="h-2.5 w-2.5 text-accent" />
                  </div>

                  <div className="glass rounded-xl p-5 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-accent font-medium text-sm">{exp.company} · {exp.location}</p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0 whitespace-nowrap bg-secondary/50 px-2 py-0.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
