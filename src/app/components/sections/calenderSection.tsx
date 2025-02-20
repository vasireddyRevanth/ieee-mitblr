"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import events from "@/data/events.json";
import { cn } from "@/lib/utils";

const eventTypes = {
  workshop: { color: "bg-blue-500", label: "Workshop" },
  lecture: { color: "bg-green-500", label: "Lecture" },
  competition: { color: "bg-red-500", label: "Competition" },
  social: { color: "bg-purple-500", label: "Social" },
};

export default function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Get all dates that have events
  const eventDates = events.events.map((event) => new Date(event.date));

  // Get events for selected date
  const selectedDateEvents = events.events.filter(
    (event) => event.date === selectedDate,
  );

  return (
    <section className="h-screen w-full snap-start snap-always bg-[#2A2A2E]">
      <div className="container py-10">
        <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5] font-['Space_Grotesk']">
          Events Calendar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calendar Side */}
          <div className="bg-gradient-to-br from-[#2A2A2E] to-[#5F8A8B] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              {Object.entries(eventTypes).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${value.color}`} />
                  <span className="text-[#F5F5F5] font-['IBM_Plex_Mono'] text-sm">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => {
                setDate(newDate);
                setSelectedDate(newDate?.toISOString().split("T")[0] || null);
              }}
              modifiers={{
                highlighted: eventDates,
              }}
              className="rounded-md border-0"
              classNames={{
                months: "font-['Space_Grotesk'] text-[#F5F5F5]",
                head_cell: "font-['IBM_Plex_Mono'] text-[#FF9EAA]",
                cell: cn(
                  "font-['Inter'] text-[#F5F5F5]",
                  "bg-[rgba(255,158,170,0.1)] border border-[rgba(255,158,170,0.2)]",
                ),
                day_selected:
                  "bg-[rgba(255,158,170,0.3)] border-[#FF9EAA] !text-[#F5F5F5]",
                day_today: "bg-[rgba(255,158,170,0.2)] text-[#FF9EAA]",
              }}
            />
          </div>

          {/* Events Timeline Side */}
          <div className="bg-[rgba(42,42,46,0.05)] p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-[#F5F5F5] font-['Space_Grotesk']">
              Upcoming Events
            </h3>
            <div className="space-y-4 overflow-y-auto max-h-[600px] pr-4">
              {events.events.map((event) => (
                <Dialog key={event.id}>
                  <DialogTrigger asChild>
                    <Card
                      className="bg-gradient-to-r from-[rgba(42,42,46,0.9)] to-[rgba(42,42,46,0.8)]
                        border-l-4 border-[#FF9EAA] hover:scale-[1.02] transition-transform cursor-pointer
                        shadow-lg"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[#7DE2D1] font-['IBM_Plex_Mono'] text-sm">
                              {new Date(event.date).toLocaleDateString()} -{" "}
                              {event.time}
                            </p>
                            <h3 className="font-['Space_Grotesk'] text-[#FF9EAA] text-lg mt-2">
                              {event.title}
                            </h3>
                            <p className="text-[#F5F5F5] font-['Inter'] text-sm">
                              {event.subtitle}
                            </p>
                          </div>
                          <Badge className="bg-[rgba(255,158,170,0.1)] text-[#FF9EAA] border border-[#FF9EAA]">
                            {eventTypes[event.type].label}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="bg-[#2A2A2E] text-[#F5F5F5]">
                    <DialogHeader>
                      <DialogTitle className="text-[#FF9EAA] font-['Space_Grotesk']">
                        {event.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-[#F5F5F5] font-['Inter']">
                        {event.subtitle}
                      </p>
                      <div className="space-y-2 font-['IBM_Plex_Mono']">
                        <p>
                          <strong>Date:</strong>{" "}
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Time:</strong> {event.time}
                        </p>
                        <p>
                          <strong>Venue:</strong> {event.venue}
                        </p>
                        {event.speakers && (
                          <p>
                            <strong>Speakers:</strong>{" "}
                            {event.speakers.join(", ")}
                          </p>
                        )}
                      </div>
                      <p className="font-['Inter']">{event.description}</p>
                      {event.registration && (
                        <a
                          href={event.registration}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            className="w-full bg-[rgba(255,158,170,0.1)] text-[#FF9EAA]
                              border border-[#FF9EAA] hover:bg-[#FF9EAA] hover:text-[#2A2A2E]
                              transition-all duration-300"
                          >
                            Register Now
                          </Button>
                        </a>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
