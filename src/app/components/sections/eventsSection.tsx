import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Events() {
  return (
    <section
      id="events"
      className="h-screen w-full snap-start snap-always flex items-center justify-center"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Events</h2>
        <Card>
          <CardHeader>
            <CardTitle>Event Title</CardTitle>
          </CardHeader>
          <CardContent>Event details here</CardContent>
        </Card>
      </div>
    </section>
  );
}
