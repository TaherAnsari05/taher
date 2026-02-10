import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abu Taher Ansari
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: "mailto:abutaheransari555@gmail.com" },
              { icon: Phone, href: "tel:+917020823266" },
              { icon: Linkedin, href: "https://linkedin.com/in/abu-taher-ansari" },
            ].map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors p-1.5 rounded-full hover:bg-accent/5">
                <item.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
