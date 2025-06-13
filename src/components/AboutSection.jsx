import { Briefcase, Code, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate web developer with hands-on experience in
              building responsive and user-friendly websites using HTML, CSS,
              JavaScript, PHP, and WordPress. I enjoy bringing ideas to life in
              the browser.
            </p>

            <p className="text-muted-foreground">
              As I continue learning and growing in this field, I’m especially
              interested in writing clean, maintainable code and exploring
              modern tools like React to build better user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1ouAjK4ssSWUPd1WgXF-GxKm6b_yHCB9Y/view"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Comfortable working with HTML, CSS, JavaScript, PHP, and
                    WordPress. I enjoy writing code that works and is easy to
                    maintain.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Teamwork & Learning</h4>
                  <p className="text-muted-foreground">
                    I work well in teams and stay open to feedback. Always
                    curious, always improving.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Looking Ahead</h4>
                  <p className="text-muted-foreground">
                    Actively looking for a full-time opportunity where I can
                    contribute, learn, and grow as a developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
