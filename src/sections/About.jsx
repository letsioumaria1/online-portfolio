import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Frontend Development",
    description:
      "Responsive, accessible interfaces in HTML, CSS, JavaScript and React.",
  },
  {
    icon: Code2,
    title: "User Experience",
    description:
      " Clean, easy-to-navigate websites that are enjoyable to use.",
  },
  {
    icon: Users,
    title: "E-commerce",
    description: "WooCommerce stores built around real business needs.",
  },
  {
    icon: Lightbulb,
    title: "SEO & Tracking",
    description:
      "Google analytics, GTM, Google search console, Google consent mode.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              More information
              <span className="font-serif italic font-normal text-white">
                {" "}
                about me
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Web Designer and Developer with 7 years of hands-on experience in building and maintaining modern, user-focused websites and web applications using CMS platforms such as WordPress. I have experience with frontend technologies including HTML, CSS, JavaScript, React and REST API integrations.
              </p>
              <p>
                I have a strong understanding of UX/UI principles, responsive design, and performance optimization, along with experience managing projects from initial requirements through to development and final delivery.
              </p>
              <p>
                I have solid knowledge of SEO best practices and a strong interest in application development and continuous learning. Throughout my experience, I have worked closely with clients and non-technical users, gaining experience in communication, requirement gathering, and collaboration within both small and larger teams.
              </p>
            </div>

            
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
