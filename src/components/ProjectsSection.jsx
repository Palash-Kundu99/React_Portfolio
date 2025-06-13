import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bhoomi Basket",
    description:
      "An e-commerce platform where farmers can list and sell their products, while customers can browse and buy. Built with PHP for vendor and order management, MySQL for secure data storage, and JavaScript for smooth interactions and checkout.",
    image: "/projects/farmer.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    demoUrl: "#",
    githubUrl: "https://github.com/Palash-Kundu99/BhoomiBasket",
  },
  {
    id: 2,
    title: "Neighborhood-Safety-Network",
    description:
      "A community-focused platform designed to enhance local safety and security through collaborative efforts. It enables residents to report safety concerns, access safety information, and coordinate with neighbors to mitigate potential issues.",
    image: "/projects/neighbours.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/Palash-Kundu99/Neighborhood-Safety-Network",
  },
  {
    id: 3,
    title: "Online Exam Portal",
    description:
      "A secure platform that captures real-time photos for identity verification, blocks re-login with the same email within 30 days, cancels the exam if the user switches to another window, and generates a personalized certificate when a candidate scores 80% or above.",
    image: "/projects/exam.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/Palash-Kundu99/Exam-Portal",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className=" text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3" gap-8>
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover m-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-3 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank" //link here
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank" //link here
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Palash-Kundu99"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
