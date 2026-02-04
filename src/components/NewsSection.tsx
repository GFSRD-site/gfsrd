import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const news = [
  {
    date: "Jan 25, 2026",
    location: "Geneva, Switzerland",
    title: "Global Summit on Sustainable Agriculture",
    description:
      "Join world leaders and experts for our annual summit addressing climate-resilient farming practices.",
    category: "Event",
  },
  {
    date: "Jan 18, 2026",
    location: "New Delhi, India",
    title: "Launch of Rural Innovation Hub",
    description:
      "A new center for agricultural technology and rural entrepreneurship opens in partnership with local government.",
    category: "News",
  },
  {
    date: "Jan 10, 2026",
    location: "Nairobi, Kenya",
    title: "Farmer Training Program Graduation",
    description:
      "Over 500 farmers complete the advanced sustainable farming certification program.",
    category: "Achievement",
  },
];

export function NewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Latest Updates
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              News & Events
            </h2>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-primary">
            View All Updates
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group bg-card hover:shadow-elevated transition-all duration-300 cursor-pointer overflow-hidden border-border/50">
                <CardContent className="p-6">
                  {/* Category Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      item.category === "Event"
                        ? "bg-accent/10 text-accent"
                        : item.category === "News"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
