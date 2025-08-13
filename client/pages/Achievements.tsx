import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrophyIcon,
  AwardIcon,
  GraduationCapIcon,
  CodeIcon,
} from "lucide-react";


export default function Achievements() {
  const achievements = [
    {
      title: "Winner - Zoom Video SDK Challenge",
      event: "HackMidwest 2024",
      description:
        "Won the Zoom Video SDK Challenge at HackMidwest 2024 for building 'Lets-Code', a real-time collaborative coding platform with integrated video/audio capabilities.",
      prize: "$2500 Prize",
      icon: TrophyIcon,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    },
    {
      title: "IBM Generative AI for Software Development",
      event: "IBM Certification",
      description:
        "Successfully completed IBM's comprehensive certification program focusing on Generative AI applications in software development, demonstrating expertise in cutting-edge AI technologies.",
      prize: "Certified",
      icon: AwardIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "MS in Computer Science",
      event: "University of Central Missouri",
      description:
        "Currently pursuing Master's degree in Computer Science with a focus on AI and software engineering, maintaining excellent academic performance.",
      prize: "3.8/4.0 GPA",
      icon: GraduationCapIcon,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "High-Performance System Design",
      event: "Software AG",
      description:
        "Designed and implemented Spring Boot microservices handling over 10M payloads per month, reducing data retrieval latency by 38% and improving system efficiency by 35%.",
      prize: "10M+ Payloads",
      icon: CodeIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Achievements & Recognition
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones that reflect my commitment to excellence, innovation, and
            continuous learning in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${achievement.bgColor}`}>
                    <achievement.icon
                      className={`h-6 w-6 ${achievement.color}`}
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      {achievement.title}
                    </CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-sm">
                        {achievement.event}
                      </Badge>
                      <Badge variant="default" className="text-sm">
                        {achievement.prize}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              By the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">🏆</div>
              <div className="text-2xl font-bold text-foreground">1</div>
              <div className="text-sm text-muted-foreground">Hackathon Win</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">💰</div>
              <div className="text-2xl font-bold text-foreground">$2.5K</div>
              <div className="text-sm text-muted-foreground">Prize Money</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">📱</div>
              <div className="text-2xl font-bold text-foreground">4+</div>
              <div className="text-sm text-muted-foreground">Apps Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">🎓</div>
              <div className="text-2xl font-bold text-foreground">3.8</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            More achievements and certifications to be added as I continue my
            journey...
          </p>
        </div>
      </div>
    </div>
  );
}
