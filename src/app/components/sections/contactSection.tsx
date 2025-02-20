import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-full snap-start snap-always flex items-center justify-center"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="space-y-4 pt-6">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
