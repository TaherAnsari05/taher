import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Oracle Cloud Infrastructure 2024 Certified Generative AI Professional",
  "Oracle Cloud Infrastructure 2024 Certified Data Science Professional",
  "Python Programming and SQL Certification",
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Certifications
          </h2>
          <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-5 flex items-start gap-4"
              >
                <div className="p-2 rounded-md bg-accent/10 shrink-0">
                  <Award className="h-5 w-5 text-accent" />
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
