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
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                    <Briefcase className="h-3 w-3 text-accent-foreground" />
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                        <p className="text-accent font-medium text-sm">{exp.company} — {exp.location}</p>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 sm:mt-0 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/60 shrink-0" />
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
