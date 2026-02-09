import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Education
          </h2>
          <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

          <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-5 max-w-2xl">
            <div className="p-3 rounded-md bg-accent/10 shrink-0">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">Bachelor of Science in Computer Science</h3>
              <p className="text-accent font-medium text-sm">Savitribai Phule Pune University (SPPU)</p>
              <p className="text-sm text-muted-foreground mt-1">August 2021 – September 2024 · Pune, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
