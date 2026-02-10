import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Education
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass rounded-xl p-5 flex items-start gap-4 max-w-2xl hover-lift"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 shrink-0">
              <GraduationCap className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
              <p className="text-accent font-medium text-sm">Savitribai Phule Pune University (SPPU)</p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">August 2021 – September 2024 · Pune, India</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
