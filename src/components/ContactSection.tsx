import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_qqpz1mt",
        "template_1kjypua",
        { from_name: form.name, from_email: form.email, message: form.message },
        "wYAJVL_iVP7WJ4d9s"
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get In Touch
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
              </p>
              <div className="space-y-2">
                {[
                  { icon: Mail, label: "abutaheransari555@gmail.com", href: "mailto:abutaheransari555@gmail.com" },
                  { icon: Phone, label: "+91 7020823266", href: "tel:+917020823266" },
                  { icon: Linkedin, label: "linkedin.com/in/abu-taher-ansari", href: "https://linkedin.com/in/abu-taher-ansari" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === Linkedin ? "_blank" : undefined}
                    rel={item.icon === Linkedin ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors glass rounded-lg px-4 py-3"
                  >
                    <item.icon className="h-4 w-4 text-accent shrink-0" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="rounded-lg"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="rounded-lg"
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="rounded-lg"
              />
              <Button type="submit" disabled={sending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                {sending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
