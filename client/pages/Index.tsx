import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [currentProject, setCurrentProject] = useState(0);

  const featuredProjects = [
    {
      title: "AI-Powered Social Media Ad Copy Generator",
      description:
        "Full-stack app generating brand-specific ads using AI. Integrated Firebase for auth, OpenAI for ad generation, deployed via AWS EC2 and S3.",
      tech: ["Angular", "Spring Boot", "MongoDB", "OpenAI", "Firebase", "AWS"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Lets-Code (HackMidwest 2024 Winner)",
      description:
        "Real-time collaborative coding platform with integrated video/audio using Zoom SDK. Addressed SSR-related integration issues.",
      tech: ["Angular", "Node.js", "Zoom Video SDK"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Ride-Matching Web Application",
      description:
        "Matching system where users can post or accept rides. Includes secure JWT authentication and cloud deployment.",
      tech: ["Spring Boot", "Angular", "MongoDB", "AWS EC2", "Cognito"],
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-primary-50 dark:from-background dark:via-primary-900/20 dark:to-background">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  Available for Opportunities
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Hi, I'm <span className="text-primary">Naveen Vemula</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  AI-Powered Full-Stack Developer specializing in Java, Spring
                  Boot, Angular, and AWS. Building enterprise-grade applications
                  with cutting-edge AI integrations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" asChild>
                  <a href="/resume.pdf" download>
                    View Resume
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Contact Me
                    <MailIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/naveen-vemula"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/Naveenramgeek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:naveenvemula2487@gmail.com">
                    <MailIcon className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Avatar/Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold text-primary">
                    NV
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-lg">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent work showcasing AI integration,
              full-stack development, and cloud deployment expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 hover:shadow-lg ${
                  index === currentProject ? "ring-2 ring-primary" : ""
                }`}
              >
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">💻</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full">
                    View Project
                    <ExternalLinkIcon className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-primary-50 dark:bg-primary-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">
                End-to-End Apps Built
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$2500</div>
              <div className="text-sm text-muted-foreground">
                HackMidwest Prize Won
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3.7</div>
              <div className="text-sm text-muted-foreground">MS GPA</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
