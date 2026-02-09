import { motion } from "framer-motion";
import { MapPin, TrendingUp, Zap, Globe } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "90%", label: "Error Reduction" },
  { icon: Zap, value: "40%", label: "Faster Dev Time" },
  { icon: Globe, value: "15+", label: "APIs Integrated" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mb-10 rounded-full" />

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                Full Stack Developer with 1+ year of experience building scalable, high-performance web applications. Expert in React.js, TypeScript, Redux, and modern JavaScript ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Proven track record of reducing console errors by 90%, developing core platform modules, and delivering production-ready features. Passionate about performance optimization, clean code architecture, and solving complex technical challenges through innovative solutions.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                <MapPin className="h-4 w-4 text-accent" />
                Pune, Maharashtra, India
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 bg-card p-5 rounded-lg border border-border"
                >
                  <div className="p-2.5 rounded-md bg-accent/10">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
