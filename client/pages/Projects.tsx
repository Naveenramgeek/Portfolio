import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Social Media Ad Copy Generator",
      description:
        "Engineered an AI-powered ad copy generator using Spring Boot, Angular, GPT-4, and gpt-image-1 to deliver personalized ad visuals 5x faster than manual creation. Integrated Firebase for authentication, and deployed the app using AWS EC2 and S3. Applied advanced prompt engineering and designed a seamless user experience UI.",
      tech: ["Spring Boot", "Angular", "GPT-4", "gpt-image-1", "Firebase", "AWS EC2", "S3", "Prompt Engineering"],
      githubUrl: "https://github.com/Naveenramgeek/ai-ad-generator",
      featured: true,
    },
    {
      title: "Lets-Code (HackMidwest 2024 Winning Project)",
      description:
        "Real-time collaborative coding platform with integrated video/audio using Zoom SDK. Addressed SSR-related integration issues.",
      tech: ["Angular", "Node.js", "Zoom Video SDK"],
      githubUrl: "https://github.com/Naveenramgeek/Zoom-SDK-Integration",
      featured: true,
    },
    {
      title: "Ride-Matching Web Application",
      description:
        "Developed a full-stack ride-sharing app using Spring Boot, Angular, and MongoDB, allowing users to post and select rides by preference, and get email notifications. Deployed backend and database on AWS EC2, hosted frontend on S3, and integrated Cognito (JWT) with CloudWatch monitoring. Tested with 1K+ ride postings during beta.",
      tech: ["Spring Boot", "Angular", "MongoDB", "AWS EC2", "S3", "Cognito", "JWT", "CloudWatch"],
      githubUrl: "https://github.com/Naveenramgeek/ride-app-client-server",
      featured: true,
    },
    {
      title: "Explainable AI for COVID-19 Detection",
      description:
        "Detects COVID-19 from CT scans using explainable AI to provide transparency in predictions.",
      tech: ["Python", "LIME", "GradCAM"],
      githubUrl: "https://github.com/Naveenramgeek/covid-detection-xai",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning AI integration, full-stack
            development, cloud deployment, and hackathon victories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">💻</span>
                </div>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl flex-1">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="default" className="ml-2">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-2 h-3 w-3" />
                        View Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Detailed project documentation, live demos, and source code links
            coming soon...
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Naveenramgeek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
