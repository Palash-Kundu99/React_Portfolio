import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full px-6 py-8 bg-card border-t border-border mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Palash Kundu. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
