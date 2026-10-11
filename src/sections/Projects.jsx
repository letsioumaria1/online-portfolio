import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "nutcupskids.com",
    description:
      "Designed and developed a fully functional e-commerce website for children’s clothing. Customized the online store structure, product categories, and user journey to enhance usability and conversions. Implemented responsive design and optimized performance across desktop and mobile devices.",
    image: "/projects/nutcups.jpg",
    tags: ["E-shop", "Javascript", "HTML", "CSS"],
    link: "https://nutcupskids.com",
  },
  {
    title: "nextron.gr",
    description:
      "Designed and developed a fully custom one‑page website with a clean layout, clear information hierarchy, and smooth user flow. Implemented responsive design to ensure optimal performance across all devices.",
    image: "/projects/nextron.jpg",
    tags: ["HTML", "CSS", "Responsive Design", "Custom Website"],
    link: "https://nextron.gr",
  },
  {
    title: "jangmi.gr",
    description:
      "Built and customized a WordPress‑based e‑commerce platform. Developed custom features, structured content architecture, and implemented SEO optimization. Collaborated with clients to align business goals, user experience, and technical implementation. Tracked user interactions on targeted buttons for behavioral analysis and performance monitoring.",
    image: "/projects/jangmi.jpg",
    tags: ["E-shop", "Javascript", "HTML", "CSS"],
    link: "https://jangmi.gr",
  },
  {
    title: "reflexology.com.gr",
    description:
      "Designed and developed a service‑oriented website with clear presentation of services and intuitive navigation. Implemented responsive design and SEO optimization to enhance visibility and user experience.",
    image: "/projects/reflexology.jpg",
    tags: ["Wordpress", "Javascript", "HTML", "CSS", "SEO"],
    link: "https://reflexology.com.gr",
  },
   {
    title: "zaharakoulisrealestate.gr",
    description:
      "Designed and developed a real estate website with a custom property management admin panel for property listings, responsive design, and SEO optimization.",
    image: "/projects/zaharakoulis.png",
    tags: ["Wordpress", "Javascript", "PHP", "CSS"],
    link: "https://zaharakoulisrealestate.gr",
  },
   {
    title: "mitsioucenter.gr",
    description:
      "Designed and developed a website for a therapy and learning support center, with clear service presentation and responsive design.",
    image: "/projects/mitsiou.jpg",
    tags: ["Wordpress", "CSS", "HTML"],
    link: "https://mitsioucenter.gr",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              I have worked on.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A small selection of projects I’ve worked on, from websites and e-shops to custom solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

              
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};