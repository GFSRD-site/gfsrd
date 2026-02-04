import { motion } from "framer-motion";
import { TrendingUp, Award, MapPin, Handshake } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    value: "150%",
    label: "Yield Improvement",
    description: "Average crop yield increase in partner communities",
  },
  {
    icon: Award,
    value: "25+",
    label: "Awards Received",
    description: "International recognition for sustainable practices",
  },
  {
    icon: MapPin,
    value: "1,200+",
    label: "Villages Reached",
    description: "Direct community engagement across regions",
  },
  {
    icon: Handshake,
    value: "80+",
    label: "Partnerships",
    description: "Collaborations with governments and NGOs",
  },
];

export function AchievementsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Making a Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our work has transformed lives and communities, creating lasting impact
            through sustainable development initiatives.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <achievement.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                {achievement.value}
              </div>
              <div className="text-lg font-semibold mb-2">{achievement.label}</div>
              <p className="text-primary-foreground/70 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
