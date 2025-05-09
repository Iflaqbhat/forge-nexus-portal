
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, Mail, MessageCircle, Send, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Placeholder for form submission
    toast.success("Message sent successfully", {
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form (would typically be done after validation and form state management)
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-forge-purple/20 text-forge-purple px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-300">
            Have questions about ForgeNexus or need help with the platform? We're here to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="glass-card border-forge-purple/20 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      className="bg-card/50 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="bg-card/50 border-white/10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required 
                    className="bg-card/50 border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={6}
                    required 
                    className="bg-card/50 border-white/10 resize-none"
                  />
                </div>
                
                <Button type="submit" className="glow-button w-full py-6">
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
          
          {/* Contact Info & Social Media */}
          <div className="space-y-8">
            <div className="glass-card border-forge-purple/20 p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-forge-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <a href="mailto:support@forgenexus.io" className="text-forge-purple hover:underline">
                      support@forgenexus.io
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mr-4">
                    <MessageCircle className="h-6 w-6 text-forge-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Live Chat</h3>
                    <p className="text-gray-300">
                      Available on weekdays from 9am to 5pm UTC
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Click the chat icon in the bottom right corner
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="glass-card border-forge-purple/20 p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 glass-card rounded-lg hover:bg-forge-purple/10 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mr-4">
                    <Twitter className="h-6 w-6 text-forge-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Twitter</h3>
                    <p className="text-sm text-gray-400">@ForgeNexus</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 glass-card rounded-lg hover:bg-forge-purple/10 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mr-4">
                    <Github className="h-6 w-6 text-forge-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-gray-400">ForgeNexus</p>
                  </div>
                </a>
                
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 glass-card rounded-lg hover:bg-forge-purple/10 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-forge-purple" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0951 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0951 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Discord</h3>
                    <p className="text-sm text-gray-400">Join our community</p>
                  </div>
                </a>
                
                <a 
                  href="https://t.me/forgenexus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 glass-card rounded-lg hover:bg-forge-purple/10 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mr-4">
                    <Send className="h-6 w-6 text-forge-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telegram</h3>
                    <p className="text-sm text-gray-400">@ForgeNexus</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* FAQ Link */}
            <div className="glass-card border-forge-purple/20 p-6 md:p-8 rounded-xl bg-gradient-to-r from-forge-purple/20 to-transparent hover:from-forge-purple/30 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
                  <p className="text-gray-400">Find answers to common questions about ForgeNexus</p>
                </div>
                <Button variant="ghost" className="text-forge-purple hover:bg-forge-purple/10">
                  View FAQ <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
