import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "MUI"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "REST APIs", "API Integration"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Vite", "Git", "GitHub", "Agile/Scrum", "VS Code"],
  },
  {
    title: "Cloud & AI",
    skills: ["Oracle Cloud Infrastructure", "Generative AI", "Data Science", "SQL"],
  },
  {
    title: "Core Competencies",
    skills: ["State Management", "Performance Optimization", "Responsive Design", "Accessibility", "UI/UX"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-normal text-xs"
                    >
                      {skill}
                    </Badge>
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
