import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="h-screen w-full snap-start snap-always flex items-center justify-center"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="font-bold">Achievement Title</h3>
            </CardHeader>
            <CardContent>Achievement description</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
