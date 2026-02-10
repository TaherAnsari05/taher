import { motion } from "framer-motion";
import { Code2, Server, Wrench, Cloud, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "MUI"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "FastAPI", "REST APIs", "API Integration"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Vite", "Git", "GitHub", "Agile/Scrum", "VS Code"],
  },
  {
    title: "Cloud & AI",
    icon: Cloud,
    skills: ["Oracle Cloud Infrastructure", "Generative AI", "Data Science", "SQL"],
  },
  {
    title: "Core Competencies",
    icon: Brain,
    skills: ["State Management", "Performance Optimization", "Responsive Design", "Accessibility", "UI/UX"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Technical Skills
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover-lift group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <cat.icon className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
