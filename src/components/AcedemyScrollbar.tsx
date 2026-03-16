import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import academyData from "@/data/academyArticles.json";

export function AcademyScrollbar() {
  const articles = academyData.articles;

  const duplicated = [...articles, ...articles];

  return (
    <section className="py-20 lg:py-28 bg-background">

      {/* Header */}
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Knowledge Hub
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              GFSRD Academy
            </h2>

            <p className="text-muted-foreground text-lg mt-3 max-w-xl">
              Explore our global centres dedicated to sustainable rural development research and practice.
            </p>
          </div>

          <a
            href="/academy"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Centres <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Logo Scroll (same container width) */}
      <div className="container mx-auto px-16 lg:px-8 overflow-hidden">
        <div
          className="flex animate-scroll gap-16 items-center"
          style={{ width: "max-content" }}
        >
          {duplicated.map((article, i) => (
            <a
              key={`${article.id}-${i}`}
              href={`/academy#${article.id}`}
              className="flex-shrink-0"
            >
              <img
                src={article.icon}
                alt={article.shortTitle}
                className="h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}