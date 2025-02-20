import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Join() {
  return (
    <section
      id="join"
      className="h-screen w-full snap-start snap-always flex items-center justify-center bg-background"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Join IEEE</h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="space-y-4 pt-6">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Button className="w-full">Join Now</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
