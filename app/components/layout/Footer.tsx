import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/app/data/constants";

interface FooterProps {
  contactEmail?: string;
}

export function Footer({ contactEmail }: FooterProps) {
  const links = contactEmail
    ? [...socialLinks, { name: "Email", url: `mailto:${contactEmail}`, icon: "mail" }]
    : socialLinks;

  return (
    <footer className="border-t border-line bg-background py-8">
      <div className="section-shell grid gap-6 text-sm md:grid-cols-3 md:items-center">
        <div>
          <p className="font-bold text-paper">{personalInfo.name}</p>
          <p className="mt-1 text-xs text-muted">
            © {new Date().getFullYear()} · Rio de Janeiro
          </p>
        </div>
        <div className="flex flex-wrap gap-5 md:justify-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="focus-ring inline-flex items-center gap-1.5 text-muted transition-colors hover:text-paper"
            >
              {link.name}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </div>
        <p className="text-xs leading-5 text-muted md:text-right">
          Ainda mexendo nisso — como todo projeto pessoal deveria ser.
        </p>
      </div>
    </footer>
  );
}
