import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  DownloadIcon,
  SendIcon,
  MapPinIcon,
  PhoneIcon,
  Loader2Icon,
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });



  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent double submission
    if (isLoading) return;

    // Validate required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Add delay to prevent rapid submissions
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      // Use FormSubmit for automatic email delivery
      const formDataToSend = new FormData();
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`.trim());
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_next', window.location.href); // Redirect back to same page
      formDataToSend.append('_captcha', 'false'); // Disable captcha for smooth UX

      // Send to FormSubmit endpoint
      const response = await fetch('https://formsubmit.co/naveenvemula2487@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        // Show success message
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {
      console.error("Email send error:", error);

      // Show error message but still reset form
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at naveenvemula2487@gmail.com",
        variant: "destructive",
      });

      // Reset form even on error so user can try again
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } finally {
      setIsLoading(false);
    }
  };
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
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      disabled={isLoading}
                    />

                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration opportunity"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can work together..."
                    className="min-h-[120px]"
                    required
                    disabled={isLoading}
                  />

                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                <div className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Your message will be sent automatically to my inbox. No additional steps required!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href="mailto:naveenvemula2487@gmail.com">
                        <MailIcon className="mr-2 h-4 w-4" />
                        Send Direct Email
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        const emailContent = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
                        navigator.clipboard.writeText(emailContent).then(() => {
                          toast({
                            title: "Message copied!",
                            description: "Paste into an email to naveenvemula2487@gmail.com",
                          });
                        });
                      }}
                    >
                      📋 Copy Message
                    </Button>
                  </div>
                </div>
              </form>
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
                    href="https://www.linkedin.com/in/naveen-vemula-3a3345192/"
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
