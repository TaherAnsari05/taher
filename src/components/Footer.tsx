import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abu Taher Ansari. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:abutaheransari555@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
            </a>
            <a href="tel:+917020823266" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/abu-taher-ansari" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
