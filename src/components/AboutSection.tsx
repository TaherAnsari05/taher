import { motion } from "framer-motion";
import { MapPin, TrendingUp, Zap, Globe } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "90%", label: "Error Reduction" },
  { icon: Zap, value: "40%", label: "Faster Dev Time" },
  { icon: Globe, value: "15+", label: "APIs Integrated" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Me
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-3">
              <p className="text-muted-foreground leading-relaxed text-sm">
                Full Stack Developer with 1+ year of experience building scalable, high-performance web applications. Expert in React.js, TypeScript, Redux, and modern JavaScript ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Proven track record of reducing console errors by 90%, developing core platform modules, and delivering production-ready features. Passionate about performance optimization, clean code architecture, and solving complex technical challenges.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Pune, Maharashtra, India
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 glass rounded-xl p-4 hover-lift"
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <stat.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
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
