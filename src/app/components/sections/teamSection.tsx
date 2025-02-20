import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Team() {
  return (
    <section
      id="team"
      className="h-screen w-full snap-start snap-always flex items-center justify-center"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src="..." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="font-bold">Name</h3>
              <p>Position</p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
