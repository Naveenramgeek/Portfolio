import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, GraduationCapIcon } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "MS in Computer Science",
      school: "University of Central Missouri",
      period: "Aug 2024 - Dec 2025",
      gpa: "3.7/4.0",
      location: "Missouri, USA",
    },
    {
      degree: "BE in Computer Science and Engineering",
      school: "PSG College of Technology",
      period: "Jul 2019 - Jun 2022",
      gpa: "8.3/10",
      location: "Tamil Nadu, India",
    },
  ];

  const experience = [
    {
      title: "Software Engineer II",
      company: "Software AG",
      period: "Dec 2023 - Jun 2024",
      technologies: [
        "Java",
        "Spring Boot",
        "Elasticsearch",
        "Spring Security",
        "OAuth2.0",
        "JWT",
        "REST APIs",
        "AWS EC2",
        "JIRA",
      ],
      description:
        "Led development of enterprise-grade applications with advanced security implementations and cloud deployments.",
    },
    {
      title: "Software Engineer I",
      company: "Software AG",
      period: "Jun 2022 - Dec 2023",
      technologies: [
        "Angular",
        "RxJS",
        "NgRx",
        "Jest",
        "Cypress",
        "Jenkins",
        "Spring Boot",
        "REST APIs",
        "Elasticsearch",
      ],
      description:
        "Developed and maintained complex frontend applications with state management and comprehensive testing strategies.",
    },
    {
      title: "Software Development Intern",
      company: "Software AG",
      period: "Jan 2022 - May 2022",
      technologies: ["Angular", "RxJS", "Spring WebFlux", "StreamSets"],
      description:
        "Built reactive web applications and data integration pipelines using modern frameworks and reactive programming paradigms.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building AI-powered, cloud-hosted, enterprise-grade
            applications that solve real-world problems.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Professional Bio
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am <strong className="text-foreground">Naveen Vemula</strong>,
                a full-stack software engineer with expertise in building
                AI-powered, cloud-hosted, enterprise-grade applications. My tech
                stack spans Java, Spring Boot, Angular, and AWS services.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm passionate about solving real-world problems using scalable
                microservices, intelligent UI/UX, and AI integrations. With
                experience at Software AG and recognition in hackathons like
                HackMidwest 2024, I bring both technical depth and innovation to
                every project.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-foreground">
                        {edu.school}
                      </p>
                    </div>
                    <GraduationCapIcon className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="pt-2">
                      <Badge variant="secondary" className="text-sm">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />

              {experience.map((exp, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />

                  <Card className="ml-16 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-primary">
                            {exp.title}
                          </CardTitle>
                          <p className="text-lg font-semibold text-foreground">
                            {exp.company}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="self-start sm:self-center"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-3">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values/Approach Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle className="text-xl">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leveraging cutting-edge AI and cloud technologies to build
                  solutions that push boundaries and deliver exceptional value.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle className="text-xl">Performance Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building scalable, high-performance applications with optimal
                  user experience and enterprise-grade security.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle className="text-xl">Solution Oriented</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focusing on solving real-world problems with practical,
                  maintainable code that delivers tangible business value.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
