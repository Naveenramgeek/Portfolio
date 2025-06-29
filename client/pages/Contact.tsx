import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  DownloadIcon,
  SendIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can work together to build something amazing.
            I'm always excited to collaborate on innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project collaboration opportunity"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or how we can work together..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full">
                <SendIcon className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Form functionality coming soon. For now, please use the contact
                methods below.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <MailIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:naveenvemula2487@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      naveenvemula2487@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Missouri, USA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Availability</p>
                    <p className="text-muted-foreground">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Connect Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/naveen-vemula"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="mr-3 h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://github.com/Naveenramgeek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="mr-3 h-5 w-5" />
                    GitHub Profile
                  </a>
                </Button>
                <Button className="w-full justify-start" asChild>
                  <a href="/resume.pdf" download>
                    <DownloadIcon className="mr-3 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-primary-50 dark:bg-primary-950/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm passionate about collaborating on innovative projects that
                  leverage AI, cloud technologies, and modern development
                  practices. Whether you're looking for a full-stack developer,
                  AI integration expert, or cloud architect, I'd love to hear
                  about your ideas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/50 dark:to-primary-900/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start a Project?
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm currently available for new opportunities and exciting
                collaborations.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:naveenvemula2487@gmail.com">
                  <MailIcon className="mr-2 h-4 w-4" />
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
