import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise across full-stack development,
            AI/ML, cloud platforms, and modern development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <span className="text-2xl mr-3">💻</span>
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Java",
                  "TypeScript",
                  "JavaScript",
                  "SQL",
                  "HTML",
                  "CSS",
                  "C++",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <span className="text-2xl mr-3">🛠️</span>
                Frameworks & Libraries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Spring Boot",
                  "Spring Security",
                  "Angular",
                  "RxJS",
                  "NgRx",
                  "Node.js",
                  "FastAPI",
                  "Flask",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <span className="text-2xl mr-3">🤖</span>
                AI & ML Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["GenAI", "AgenticAI", "OpenAI API", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "LIME", "GradCAM"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <span className="text-2xl mr-3">☁️</span>
                DevOps & Cloud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS EC2",
                  "S3",
                  "Lambda",
                  "Cognito",
                  "CloudWatch",
                  "VPC",
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <span className="text-2xl mr-3">🗄️</span>
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "MySQL", "Elasticsearch"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <span className="text-2xl mr-3">🔒</span>
                Security & Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "OAuth2.0",
                  "JWT",
                  "RBAC",
                  "IAM",
                  "JUnit",
                  "Mockito",
                  "Jest",
                  "Cypress",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Detailed skill proficiency levels and project examples coming
            soon...
          </p>
        </div>
      </div>
    </div>
  );
}
