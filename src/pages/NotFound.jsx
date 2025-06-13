import { ArrowLeftCircle } from "lucide-react";

export const NotFound = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-secondary/10 px-6">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <a href="/">
            <button className="flex items-center gap-2">
              <ArrowLeftCircle size={18} />
              Go Home
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};
