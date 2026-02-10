import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Oracle Cloud Infrastructure 2024 Certified Generative AI Professional",
  "Oracle Cloud Infrastructure 2024 Certified Data Science Professional",
  "Python Programming and SQL Certification",
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Certifications
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="glass rounded-xl p-4 flex items-start gap-3 hover-lift group"
              >
                <div className="p-2 rounded-lg bg-accent/10 shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-4 w-4 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
